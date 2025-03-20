import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import "./Login.css"; // Ensure error styling is included

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(""); 
    const navigate = useNavigate(); // Hook for redirection

    // Toggle Password Visibility
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Handle Login
    const handleLogin = async () => {
        setError(""); // Clear previous errors

        // Special case for Parth Gholap
        if (username.toLowerCase() === "parth gholap" && password === "1911") {
            navigate("/PartHome"); // Redirect to a special home page for Parth
            return;
        }

        if (username.toLowerCase() === "ayush karan" && password === "2005") {
            navigate("/home"); // Redirect to a special home page for Parth
            return;
        }

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                navigate("/home"); // Redirect normal users to home page
            } else {
                setError("*Incorrect Username or Password");
            }
        } catch (error) {
            setError("*Incorrect Username or Password");
        }
    };

    // Handle Enter Key Press
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="login-container">
                {error && <p className="error-message">{error}</p>}

                <div className="form-group">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={handleKeyPress} // Listen for Enter key
                        placeholder=" "
                        required
                    />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>

                <div className="form-group">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyPress} // Listen for Enter key
                        placeholder=" "
                        required
                    />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>

                <label className="password-toggle">
                    <input type="checkbox" onChange={togglePassword} />
                    <span>Show Password</span>
                </label>

                <button type="button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
