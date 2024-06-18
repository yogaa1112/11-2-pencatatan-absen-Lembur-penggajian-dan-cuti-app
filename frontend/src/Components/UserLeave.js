import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const UserLeave = () => {
  const [data, setData] = useState([
    { id: 1, name: "M Ichsan Dedi", position: "Karyawan", startDate: "", endDate: "", notes: "" },
    { id: 2, name: "M Ahya Fajri F", position: "Karyawan", startDate: "", endDate: "", notes: "" },
    { id: 3, name: "M Ahya Fajri F", position: "Karyawan", startDate: "", endDate: "", notes: "" },
  ]);

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className="main-content">
      <h1>Data Cuti</h1>
      <br />
      <div className="header-controls">
        <Link to="/user/leaveapplication">
          <Button className="print-button">Cuti</Button>
        </Link>
      </div>
      <table className="leave-table">
      <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>Tanggal Mulai</th>
            <th>Tanggal Selesai</th>
            <th>Keterangan</th>
            <th>Hapus</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.notes}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(item.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLeave;