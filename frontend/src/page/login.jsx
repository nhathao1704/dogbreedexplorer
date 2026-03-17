import { useState } from "react";
import { loginUser } from "../api/authapi";
import "../styles/index.css"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(form);
      alert("Login thành công");
      window.location.href = "/";
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Đăng nhập</h2>

        <form onSubmit={handleSubmit}>
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

          <button type="submit" >Login</button>
        </form>

        <p>
          Chưa có tài khoản? <a href="/register">Đăng ký</a>
        </p>
      </div>
    </div>
  );
}