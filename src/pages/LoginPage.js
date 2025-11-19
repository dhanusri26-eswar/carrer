import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      setMessage(res.data.message || "Login successful!");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setLoading(false);
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      setLoading(false);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      </form>
      {message && <p style={{ color: message.includes("successful") ? "green" : "red" }}>{message}</p>}
      <p>Don't have an account? <span style={{color:"blue", cursor:"pointer"}} onClick={() => navigate("/signup")}>Sign Up</span></p>
    </div>
  );
}

export default LoginPage;
