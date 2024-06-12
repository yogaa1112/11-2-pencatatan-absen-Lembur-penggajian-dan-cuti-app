import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const UserAttendance = () => {
  // Data contoh untuk tabel recap absensi
  const attendanceData = [
    {
      day: 'Monday',
      date: '2024-06-01',
      timeIn: '09:00',
      timeOut: '17:00',
      overtime: '2 hours',
      image: 'url/to/image1.jpg'
    },
    {
      day: 'Tuesday',
      date: '2024-06-02',
      timeIn: '09:15',
      timeOut: '17:30',
      overtime: '1.5 hours',
      image: 'url/to/image2.jpg'
    },
    // Tambahkan data absensi lainnya sesuai kebutuhan
  ];

  return (
    <div className="attendance-container">
      <h2>Recap Absensi</h2>
      <table>
        <thead>
          <tr>
            <th>Hari</th>
            <th>Tanggal</th>
            <th>Jam Masuk</th>
            <th>Jam Keluar</th>
            <th>Lembur</th>
            <th>Lihat</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance, index) => (
            <tr key={index}>
              <td>{attendance.day}</td>
              <td>{attendance.date}</td>
              <td>{attendance.timeIn}</td>
              <td>{attendance.timeOut}</td>
              <td>{attendance.overtime}</td>
              <td>
                <Link to={`/user/attendance/${index}`}>
                  Lihat Foto
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAttendance;