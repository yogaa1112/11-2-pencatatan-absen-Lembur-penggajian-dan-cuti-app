import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000login", data);
      const { token } = response.data;

      // Simpan token di localStorage atau sessionStorage
      localStorage.setItem("token", token);

      alert("Login berhasil, Anda akan diarahkan ke dashboard yang sesuai.");

      // Navigasi berdasarkan peran pengguna
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      if (decodedToken.email === "admin@example.com") {
        navigate("/admin/home");
      } else {
        navigate("/user/userhome");
      }
    } catch (error) {
      alert("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="container-login">
      <div className="login-form">
        <div className="header-login">
          <label className="title-login">Login</label>
          <p className="description-login">Silahkan Masukan E-mail dan Password</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_container">
            <Form.Label>Email</Form.Label>
            <input id="email_field" className="input_field" type="text" {...register("email", { required: true })} placeholder="name@mail.com" />
            {errors.email && <p className="error-message">Email harus diisi.</p>}
          </div>
          <br />
          <div className="input_container">
            <Form.Label>Password</Form.Label>
            <input id="password_field" className="input_field" type="password" {...register("password", { required: true })} placeholder="Password" />
            {errors.password && <p className="error-message">Password harus diisi.</p>}
          </div>
          <br />
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <br />
          <button className="login-btn" type="submit">
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;