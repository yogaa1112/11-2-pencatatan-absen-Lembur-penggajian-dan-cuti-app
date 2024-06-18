import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
let api = process.env.REACT_APP_REMOTE_URL;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const onSubmit = async (data) => {
    console.log(data)

    if(data.confirm !== data.password) {
      alert("Passwords do not match. Please try again.")
      return;
    } 
    try {
      const res = await axios.post(`${api}/register`, data);
      if (res.data.message != "success") {
        return alert("Server is down. Please try again later.");
      }
      alert("Register successful, navigating to Login page");
      navigate("/login");
    } catch (err) {
      alert("Server is down. Please try again later.");
    }
  };

  return (
    <div className="container-login">
      <div className="login-form">
        <div className="header-login">
          <label className="title-login">Register</label>
            <p className="description-login">Register to access your account and start managing your workflow.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_container">
            <Form.Label>Name</Form.Label>
            <input id="name_field" className="input_field" type="text" {...register("name", { required: true })} placeholder="Full name" />
            {errors.name && <p className="error-message">Name is required.</p>}
          </div>
          <br />
          <div className="input_container">
            <Form.Label>Email</Form.Label>
            <input id="email_field" className="input_field" type="email" {...register("email", { required: true })} placeholder="name@mail.com" />
            {errors.email && <p className="error-message">Email is required.</p>}
          </div>
          <br />
          <div className="input_container">
            <Form.Label>Position</Form.Label>
            <input id="position_field" className="input_field" type="position" {...register("position", { required: true })} placeholder="CEO" />
            {errors.position && <p className="error-message">Position is required.</p>}
          </div>
          <br />
          <div className="input_container">
            <Form.Label>Whatsapp Number</Form.Label>
            <input id="waphone_field" className="input_field" type="waphone" {...register("waphone", { required: true })} placeholder="62821xxxx" />
            {errors.waphone && <p className="error-message">Whatsapp is required.</p>}
          </div>
          <br />
          <div className="input_container">
            <Form.Label>Password</Form.Label>
            <div className="password-container">
              <input
                id="password_field"
                className="input_field"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Password"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="password-toggle-icon"
              />
            </div>
            {errors.password && <p className="error-message">Password is required.</p>}
          </div>

          <br />
          <div className="input_container">
            <Form.Label>Confirm Password</Form.Label>
            <input id="confirm_field" className="input_field" type="confirm" {...register("confirm", { required: true })} placeholder="Confirm Password" />
            {errors.confirm && <p className="error-message">Confirm Password is required.</p>}
          </div>
          <br />
          {/* <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
          <div className="register-here">
            Don't have an account? <Link to="/register-here">Register here</Link>
          </div>
          <br />
          <button className="login-btn" type="submit">
            <span>Register</span>
          </button>
          <br />  <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
