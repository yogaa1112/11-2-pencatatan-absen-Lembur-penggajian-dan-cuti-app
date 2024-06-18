import React, { useState, useEffect } from "react";
import "../App.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios"

const Employees = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        axios.get(`${process.env.REACT_APP_REMOTE_URL}/employee/list`).then((resp) => {
          setEmployeesList(resp.data);
        })
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = (index) => {
    const updatedList = employeesList.filter((_, i) => i !== index);
    setEmployeesList(updatedList);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="main-content">
      <div className="header-container">
        <h2>Employees</h2>
        <Link to="/admin/add-employee">
          <button className="add-employee">+ Add Employee</button>
        </Link>
      </div>
      <div className="employees-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Position</th>
              <th className="text-center">WhatsApp Number</th>
              <th className="text-center">Status</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Salary Amount</th>
              <th className="text-center">Salary Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((employee, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{employee.full_name}</td>
                <td className="text-center">{employee.position}</td>
                <td className="text-center">{employee.wa_phone}</td>
                <td className="text-center">{employee.status}</td>
                <td className="text-center">{employee.gender}</td>
                <td className="text-center">{employee.salary_amount}</td>
                <td className="text-center">{employee.salary_date}</td>
                <td className="text-center">
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
