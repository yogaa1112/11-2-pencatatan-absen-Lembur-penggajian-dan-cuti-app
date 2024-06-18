import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { getCurrentUser } from './Services/getCurrentUser';

const UserAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserAndAttendanceData = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData.user);

        const response = await axios.post(`${process.env.REACT_APP_REMOTE_URL}/employee/attendance/list`, { user: userData.user });
        const rawData = response.data;

        // Process the raw data to combine entries with the same date
        const processedData = rawData.reduce((acc, curr) => {
          const existingEntry = acc.find(entry => entry.date === curr.date);
          if (existingEntry) {
            if (curr.type === 'in') {
              existingEntry.time_in = curr.hours;
            } else if (curr.type === 'out') {
              existingEntry.time_out = curr.hours;
            }
          } else {
            acc.push({
              day: curr.day,
              date: curr.date,
              time_in: curr.type === 'in' ? curr.hours : 'Belum absen',
              time_out: curr.type === 'out' ? curr.hours : 'Belum absen',
              photo_url: curr.photo_url
            });
          }
          return acc;
        }, []);

        setAttendanceData(processedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndAttendanceData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="attendance-container">
      <h2 className="attendance-heading">Recap Absensi</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Hari</th>
            <th>Tanggal</th>
            <th>Jam Masuk</th>
            <th>Jam Keluar</th>
            <th>Lihat</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance, index) => (
            <tr key={index}>
              <td>{attendance.day}</td>
              <td>{attendance.date}</td>
              <td>{attendance.time_in}</td>
              <td>{attendance.time_out}</td>
              <td>
                <a
                  href={`${process.env.REACT_APP_REMOTE_URL}${attendance.photo_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                >
                  Lihat Foto
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAttendance;
