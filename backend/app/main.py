from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas.login import LoginRequest

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome"
    }


@app.post("/login")
def login(request: LoginRequest):

    print(request.email)

    print(request.password)

    return {
        "message": "Login Successful"
    }