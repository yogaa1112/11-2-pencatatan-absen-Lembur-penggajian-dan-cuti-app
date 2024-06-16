import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import "../App.css";
let api = process.env.REACT_APP_REMOTE_URL

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${api}/login`, data)
      const token = res.data?.token;
        if (!token) {
          return alert("Email atau password salah. Silakan coba lagi.");
        }
      localStorage.setItem('token', token);
      alert("Login berhasil sebagai Admin, akan navigasi ke Dashboard Admin");
      navigate("/admin/home"); 
    } catch (err) {
      alert("Email atau password salah. Silakan coba lagi.");
    }

    // // Simulasi pemeriksaan kredensial
    // if (email === "admin@example.com" && password === "adminpassword") {
    //   console.log("Navigasi ke Dashboard Admin");
    //   alert("Login berhasil sebagai Admin, akan navigasi ke Dashboard Admin");
    //   navigate("/admin/home"); // Navigasi menggunakan useNavigate
    // } else if (email === "employee@example.com" && password === "employeepassword") {
    //   console.log("Navigasi ke Dashboard Karyawan");
    //   alert("Login berhasil sebagai Karyawan, akan navigasi ke Dashboard Karyawan");
    //   navigate("/user/userhome"); // Navigasi menggunakan useNavigate
    // } else {
    //   alert("Email atau password salah. Silakan coba lagi.");
    // }

  };

  return (
    <div className="container-login">
      <div className="login-form">
        <div className="header-login">
          <label className="title-login">Login</label>
          <p className="description-login">Create your account in no time and enjoy our best online courses for free.</p>
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
