import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = async data => {
    const { email, newPassword, confirmPassword } = data;

    if (newPassword !== confirmPassword) {
      alert('Password baru dan konfirmasi password tidak cocok.');
      return;
    }

    // Simulasi update password di database
    try {
      // Ganti URL berikut dengan endpoint API yang sesuai untuk update password
      const response = await fetch('https://yourapiendpoint.com/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, newPassword })
      });

      if (response.ok) {
        alert('Password berhasil direset. Silakan login dengan password baru Anda.');
        navigate('/login'); // Navigasi ke halaman login
      } else {
        alert('Terjadi kesalahan saat mereset password. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mereset password. Silakan coba lagi.');
    }
  };

  return (
    <div className="container-forgot-password">
      <div className="forgot-password-form">
        <div className="header-forgot-password">
          <label className="title-forgot-password">Reset Password</label>
          <p className="description-forgotpassword">Masukkan email Anda dan buat password baru.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_container">
            <Form.Label>Email</Form.Label>
            <input id="email_field" className="input_field" type="text" {...register('email', { required: true })} placeholder="name@mail.com" />
            {errors.email && <p className="error-message">Email harus diisi.</p>}
          </div>
          <br />
          <div className="input_container">
            <Form.Label>Password Baru</Form.Label>
            <input id="new_password_field" className="input_field" type="password" {...register('newPassword', { required: true })} placeholder="Password Baru" />
            {errors.newPassword && <p className="error-message">Password baru harus diisi.</p>}
          </div>
          <br />
          <div className="input_container">
            <Form.Label>Konfirmasi Password Baru</Form.Label>
            <input id="confirm_password_field" className="input_field" type="password" {...register('confirmPassword', { required: true })} placeholder="Konfirmasi Password Baru" />
            {errors.confirmPassword && <p className="error-message">Konfirmasi password baru harus diisi.</p>}
          </div>
          <br />
          <button className="reset-password-btn" type="submit">
            <span>Reset Password</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
