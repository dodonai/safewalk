import os
import uuid
from datetime import datetime, timezone
from pathlib import Path

from jinja2 import Environment, FileSystemLoader
from weasyprint import HTML
from supabase import create_client

TEMPLATES_DIR = Path(__file__).parent / "templates"
OUTPUT_DIR = Path(__file__).parent / "output"
OUTPUT_DIR.mkdir(exist_ok=True)

jinja_env = Environment(loader=FileSystemLoader(str(TEMPLATES_DIR)))

supabase = create_client(
    os.environ["SUPABASE_URL"],
    os.environ["SUPABASE_SERVICE_ROLE_KEY"],
)

# Which documents each tier includes
TIER_DOCUMENTS = {
    "basic": ["policy", "poster", "log_form"],
    "contract": ["policy", "poster", "log_form", "contract"],
}


async def generate_documents(
    purchase_id: str,
    tier: str,
    business_name: str,
    business_address: str,
    business_city: str,
    business_state: str,
    business_zip: str,
    contact_name: str,
) -> list[dict]:
    """Generate all documents for a purchase and store download records."""

    doc_types = TIER_DOCUMENTS.get(tier, TIER_DOCUMENTS["basic"])
    context = {
        "business_name": business_name,
        "business_address": business_address,
        "business_city": business_city,
        "business_state": business_state,
        "business_zip": business_zip,
        "contact_name": contact_name,
        "full_address": f"{business_address}, {business_city}, {business_state} {business_zip}",
        "generated_date": datetime.now(timezone.utc).strftime("%B %d, %Y"),
        "year": datetime.now(timezone.utc).strftime("%Y"),
    }

    results = []

    for doc_type in doc_types:
        template = jinja_env.get_template(f"{doc_type}.html")
        html_content = template.render(**context)

        filename = f"{purchase_id}_{doc_type}_{uuid.uuid4().hex[:8]}.pdf"
        output_path = OUTPUT_DIR / filename

        HTML(string=html_content).write_pdf(str(output_path))

        # Upload to Supabase Storage
        with open(output_path, "rb") as f:
            storage_path = f"documents/{purchase_id}/{filename}"
            supabase.storage.from_("safewalk-docs").upload(storage_path, f.read())

        # Get signed URL (valid for 1 year)
        signed = supabase.storage.from_("safewalk-docs").create_signed_url(
            storage_path, 365 * 24 * 60 * 60
        )
        file_url = signed["signedURL"]

        # Create download record
        supabase.table("downloads").insert(
            {
                "purchase_id": purchase_id,
                "document_type": doc_type,
                "file_url": file_url,
            }
        ).execute()

        results.append({"type": doc_type, "url": file_url})

        # Clean up local file
        output_path.unlink()

    # Mark purchase as documents_generated
    supabase.table("purchases").update({"documents_generated": True}).eq(
        "id", purchase_id
    ).execute()

    return results
