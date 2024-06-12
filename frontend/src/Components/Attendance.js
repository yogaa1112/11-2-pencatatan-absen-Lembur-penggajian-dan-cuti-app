import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Attendance = () => {
  // State untuk menyimpan tanggal saat ini
  const [currentDate, setCurrentDate] = useState(new Date());

  // Fungsi untuk menambah hari
  const handleNextDay = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getTime() + 24 * 60 * 60 * 1000));
  };

  // Fungsi untuk mengurangi hari
  const handlePrevDay = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getTime() - 24 * 60 * 60 * 1000));
  };

  // Format tanggal untuk ditampilkan
  const formatDate = (date) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className="main-content">
      <h1>Data Presensi</h1>
      <br></br>
      <div className="button-hadir">
        <Link to="/admin/attendance">
          <button className="active">Hadir</button>
        </Link>
      </div>
      <div className="button-cuti">
        <Link to="/admin/leave">
          <button>Cuti</button>
        </Link>
      </div>
      <br></br>
      <div className="header-controls">
        <Link to="/">
          <Button className="print-button">Cetak</Button>
        </Link>
      </div>
      <section className="date-navigation">
        <button className="nav-button" onClick={handlePrevDay}>
          {"<"}
        </button>
        <div className="date-display">
          <div className="hadir-hari">{formatDate(currentDate).split(",")[0]}</div>
          <div className="hadir-tanggal">{formatDate(currentDate).split(",")[1]}</div>
        </div>
        <button className="nav-button" onClick={handleNextDay}>
          {">"}
        </button>
      </section>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>Tanggal</th>
            <th>Jam Masuk</th>
            <th>Jam Keluar</th>
            <th>Lembur</th>
            <th>Lihat</th>
            <th>Hapus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>M Ichsan Dedi</td>
            <td>Karyawan</td>
            <td>23 Mei 2024</td>
            <td>08.00</td>
            <td>16.00</td>
            <td>Tidak</td>
            <td>
              <button className="view-button">📄</button>
            </td>
            <td>
              <button className="delete-button">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>M Ahya Fajri F</td>
            <td>Karyawan</td>
            <td>23 Mei 2024</td>
            <td>08.00</td>
            <td>18.00</td>
            <td>2 Jam</td>
            <td>
              <button className="view-button">📄</button>
            </td>
            <td>
              <button className="delete-button">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>M Ahya Fajri F</td>
            <td>Karyawan</td>
            <td>23 Mei 2024</td>
            <td>08.00</td>
            <td>16.00</td>
            <td>Tidak</td>
            <td>
              <button className="view-button">📄</button>
            </td>
            <td>
              <button className="delete-button">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
