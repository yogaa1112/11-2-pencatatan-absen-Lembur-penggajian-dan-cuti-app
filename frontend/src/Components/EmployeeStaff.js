import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../App.css";
import { Link } from "react-router-dom";

const EmployeeStaff = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content-admin">
        <div className="form-container">
          <h2>Masukkan Data Karyawan</h2>
          <br></br>
          <h3>Informasi Kepegawaian</h3>
          <br></br>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formStatusKaryawan">
                  <Form.Label>
                    Status Karyawan<span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Tetap / Kontrak" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formJabatan">
                  <Form.Label>
                    Jabatan <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Jabatan" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formTanggalBergabung">
                  <Form.Label>
                    Tanggal Bergabung <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Tanggal Bergabung" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formPangkat">
                  <Form.Label>
                    Pangkat <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Pangkat" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPenempatanKerja">
                  <Form.Label>
                    Penempatan Kerja <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Penempatan Kerja" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Link to="/admin/employee-payroll">
              <Button variant="primary" className="submit-btn">
                Selanjutnya
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStaff;
