import { useState } from "react";
import api from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {

        if (email === "" || password === "") {
            alert("Required fields");
            return;
        }

        try {

            const response = await api.post("/login", {

                email,
                password

            });

            console.log(response.data);

            alert(response.data.message);

        }

        catch (error) {

            console.log(error);

            alert("Login Failed");

        }

    }

    return (
        <div>
            <h1>Login</h1>

            <div>
                <label>Email</label>

                <br />

                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <br />

            <div>
                <label>Password</label>

                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <br />

            <button onClick={handleLogin}>
                Login
            </button>
            <hr />

            <h3>Preview</h3>

            <p>Email: {email}</p>

            <p>Password: {password}</p>


        </div>
    );
}

export default Login;