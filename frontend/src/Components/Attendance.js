import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Attendance = () => {
  // State untuk menyimpan tanggal saat ini dan data presensi
  const [currentDate, setCurrentDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      name: "M Ichsan Dedi",
      position: "Karyawan",
      date: "23 Mei 2024",
      startTime: "08.00",
      endTime: "16.00",
      overtime: "Tidak"
    },
    {
      id: 2,
      name: "M Ahya Fajri F",
      position: "Karyawan",
      date: "23 Mei 2024",
      startTime: "08.00",
      endTime: "18.00",
      overtime: "2 Jam"
    },
    {
      id: 3,
      name: "M Ahya Fajri F",
      position: "Karyawan",
      date: "23 Mei 2024",
      startTime: "08.00",
      endTime: "16.00",
      overtime: "Tidak"
    }
  ]);

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

  // Fungsi untuk menghapus entri presensi berdasarkan id
  const handleDeleteEntry = (id) => {
    setAttendanceData(attendanceData.filter(entry => entry.id !== id));
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
          {attendanceData.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.position}</td>
              <td>{entry.date}</td>
              <td>{entry.startTime}</td>
              <td>{entry.endTime}</td>
              <td>{entry.overtime}</td>
              <td>
                <button className="view-button">📄</button>
              </td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteEntry(entry.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
