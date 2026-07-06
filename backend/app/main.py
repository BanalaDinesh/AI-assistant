from fastapi import FastAPI
from app.database import Base, engine
from app.database import SessionLocal
from app.models.user import User
from app.schemas.auth import RegisterRequest

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "Backend Running"}

@app.post("/register")
def register(data: RegisterRequest):

    db = SessionLocal()

    user = User(
        name=data.name,
        email=data.email,
        password=data.password
    )

    db.add(user)

    db.commit()

    db.close()

    return {
        "message": "User Registered Successfully"
    }