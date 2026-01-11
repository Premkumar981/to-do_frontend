import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import api from "../api/axios";
import "../styles/auth.css";
import "../styles/layout.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await api.post("/auth/login", { email, password });
    navigate("/dashboard");
  };

  const handleGoogleLogin = async (res) => {
    await api.post("/auth/google", res.credential, {
      headers: { "Content-Type": "text/plain" },
    });
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>Login to manage your tasks</p>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <div className="google-btn">
          <GoogleLogin onSuccess={handleGoogleLogin} />
        </div>

        <div className="auth-links">
          No account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
