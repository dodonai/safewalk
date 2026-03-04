import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv
from generate import generate_documents

load_dotenv()

app = FastAPI(title="SafeWalk Document Generation API")


class GenerateRequest(BaseModel):
    purchase_id: str
    tier: str  # 'basic' or 'contract'
    business_name: str
    business_address: str
    business_city: str
    business_state: str
    business_zip: str
    contact_name: str


@app.post("/generate")
async def generate(req: GenerateRequest):
    try:
        result = await generate_documents(
            purchase_id=req.purchase_id,
            tier=req.tier,
            business_name=req.business_name,
            business_address=req.business_address,
            business_city=req.business_city,
            business_state=req.business_state,
            business_zip=req.business_zip,
            contact_name=req.contact_name,
        )
        return {"status": "ok", "documents": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health():
    return {"status": "ok"}
