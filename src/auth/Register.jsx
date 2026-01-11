import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import "../styles/auth.css";
import "../styles/layout.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await api.post("/auth/signup", { name, email, password });
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account ✨</h2>
        <p>Start organizing your tasks</p>

        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>

        <div className="auth-links">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
