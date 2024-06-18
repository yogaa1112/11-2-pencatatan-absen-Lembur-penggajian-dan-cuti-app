import React, { useState, useEffect } from "react";
import "../App.css";
import HeaderAdmin from "./HeaderAdmin";
import useCurrentUser from "./Services/useCurrentUser";

const HomeDashboard = () => {
  const { user, loading, error } = useCurrentUser();

  const [stats, setStats] = useState({
    karyawanAktif: 0,
    karyawanCuti: 0,
    karyawanKeluar: 0,
  });

  // useEffect(() => {
  //   fetchStats();
  // }, []);

  // const fetchStats = async () => {
  //   try {
  //     const response = await fetch("URL_API_ANDA");
  //     const data = await response.json();
  //     setStats({
  //       karyawanAktif: data.karyawanAktif,
  //       karyawanCuti: data.karyawanCuti,
  //       karyawanKeluar: data.karyawanKeluar,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching stats:", error);
  //   }
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  if (!user) {
    return <div>No user data</div>;
  }

  console.log(user)

  return (
    <div>
      <HeaderAdmin />
      <div className="homedashboard">
        <main className="main-content-admin">
          <header className="header-admin-info">
            <div className="user-info">
              <h1>Halo, {user.name || "User"}</h1>
              <p>Saya merupakan admin yang akan mengelola data karyawan</p>
              <p>PT. Workflow</p>
            </div>
            <div className="admin-avatar">
              <img src="path/to/avatar.png" alt="User Avatar" />
            </div>
          </header>
          <div className="stats">
            <div className="stat-item-aktif">
              <h2>Karyawan Aktif</h2>
              <p>{stats.karyawanAktif}</p>
            </div>
            <div className="stat-item-cuti">
              <h2>Karyawan Cuti</h2>
              <p>{stats.karyawanCuti}</p>
            </div>
            <div className="stat-item-keluar">
              <h2>Karyawan Keluar</h2>
              <p>{stats.karyawanKeluar}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeDashboard;
