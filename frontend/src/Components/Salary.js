import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Salary = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const date = new Date();
    setCurrentMonth(date.getMonth());
    setCurrentYear(date.getFullYear());
  }, []);

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth - 1;
      let newYear = currentYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => {
      let newMonth = prevMonth + 1;
      let newYear = currentYear;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  };

  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return (
    <div className="main-content-admin">
      <div className="content">
        <h1>Gaji</h1>
        <div className="header-controls">
          <Link to="/admin/add-salary">
            <Button className="button-gaji">+ Gaji</Button>
          </Link>
        </div>
        <div className="callender">
          <div className="date-navigation">
            <button className="nav-button" onClick={prevMonth}>
              &#10094;
            </button>
            <div className="date-display">
              <div className="hadir-hari">{currentYear}</div>
              <div className="hadir-tanggal">{monthNames[currentMonth]}</div>
            </div>
            <button className="nav-button" onClick={nextMonth}>
              &#10095;
            </button>
          </div>
        </div>
        <div className="table-gaji">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Periode</th>
                <th>Jabatan</th>
                <th>No. Rekening</th>
                <th>Gaji</th>
                <th>Cetak</th>
                <th>Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>M Ichsan Dedi</td>
                <td>01-31 Mei 2024</td>
                <td>Marketing</td>
                <td>3311123435</td>
                <td>Rp 5.000.000</td>
                <td>
                  <button className="view-button">📄</button>
                </td>
                <td>
                  <button className="delete-button">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>M Ahya Fajri F</td>
                <td>01-31 Mei 2024</td>
                <td>IT</td>
                <td>6755434219</td>
                <td>Rp 5.000.000</td>
                <td>
                  <button className="view-button">📄</button>
                </td>
                <td>
                  <button className="delete-button">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Nisrina Q. A</td>
                <td>01-31 Mei 2024</td>
                <td>IT</td>
                <td>554632387</td>
                <td>Rp 5.000.000</td>
                <td>
                  <button className="view-button">📄</button>
                </td>
                <td>
                  <button className="delete-button">🗑️</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Salary;
