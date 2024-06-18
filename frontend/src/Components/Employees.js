import React, { useState } from "react";
import "../App.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Employees = () => {
  const [employeesList, setEmployeesList] = useState([
    {
      no: 1,
      name: "M Ichsan Dedi",
      sex: "Laki-laki",
      id: "KTP",
      nik: "12345678",
      religion: "Islam",
      education: "S1",
    },
    {
      no: 2,
      name: "M Ahya Fajri F",
      sex: "Laki-laki",
      id: "KTP",
      nik: "12345678",
      religion: "Islam",
      education: "S2",
    },
    {
      no: 3,
      name: "M Ahya Fajri F",
      sex: "Laki-laki",
      id: "KTP",
      nik: "12345678",
      religion: "Islam",
      education: "S2",
    },
  ]);

  const handleDelete = (index) => {
    const updatedList = employeesList.filter((_, i) => i !== index);
    setEmployeesList(updatedList);
  };

  return (
    <div className="main-content">
      <div className="header-container">
        <h2>Karyawan</h2>
        <Link to="/admin/add-employee">
          <button className="add-employee">+ Karyawan</button>
        </Link>
      </div>
      <div className="employees-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Identitas</th>
              <th>NIK</th>
              <th>Agama</th>
              <th>Pendidikan</th>
              <th>Hapus</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((employee, index) => (
              <tr key={index}>
                <td>{employee.no}</td>
                <td>{employee.name}</td>
                <td>{employee.sex}</td>
                <td>{employee.id}</td>
                <td>{employee.nik}</td>
                <td>{employee.religion}</td>
                <td>{employee.education}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(index)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Employees;
