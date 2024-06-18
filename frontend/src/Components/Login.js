import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
let api = process.env.REACT_APP_REMOTE_URL;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${api}/login`, data);
      const token = res.data?.token;
      if (!token) {
        return alert("Incorrect email or password. Please try again.");
      }
      localStorage.setItem('token', token);
      alert("Login successful as Admin, navigating to Admin Dashboard");
      navigate("/admin/home");
    } catch (err) {
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="container-login">
      <div className="login-form">
        <div className="header-login">
          <label className="title-login">Login</label>
            <p className="description-login">Sign in to access your account and start managing your workflow.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_container">
            <Form.Label>Email</Form.Label>
            <input id="email_field" className="input_field" type="text" {...register("email", { required: true })} placeholder="name@mail.com" />
            {errors.email && <p className="error-message">Email is required.</p>}
          </div>
          <br />
          <div className="input_container">
            <Form.Label>Password</Form.Label>
            <input id="password_field" className="input_field" type="password" {...register("password", { required: true })} placeholder="Password" />
            {errors.password && <p className="error-message">Password is required.</p>}
          </div>
          <br />
          {/* <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
          <div className="register">
            Don't have an account? <Link to="/register">Register here</Link>
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
