import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin() {
        if (email === "" || password === "") {
            alert("Please fill all fields");

            return;
        }

        alert("Login Successful");
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