// src/Components/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Logika untuk logout dapat ditambahkan di sini, seperti membersihkan sesi
    // Setelah logout, arahkan pengguna ke halaman utama
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h2>Anda telah keluar.</h2>
    </div>
  );
}

export default Logout;
