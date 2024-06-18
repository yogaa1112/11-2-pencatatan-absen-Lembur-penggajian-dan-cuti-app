import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../App.css";
import { Link } from "react-router-dom";

const EmployeePayroll = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content-admin">
        <div className="form-container">
          <h2>Masukkan Data Karyawan</h2>
          <br></br>
          <h3>Informasi Payroll</h3>
          <br></br>
          <Form>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNPWP">
                  <Form.Label>
                    NPWP <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="NPWP" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNoBPJSKetenagakerjaan">
                  <Form.Label>
                    No BPJS Ketenagakerjaan <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="No BPJS Ketenagakerjaan" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formTanggalEfektifBPJSKetenagakerjaan">
                  <Form.Label>
                    Tanggal Efektif <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Tanggal Efektif" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNoBPJSKesehatan">
                  <Form.Label>
                    No BPJS Kesehatan <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="No BPJS Kesehatan" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formTanggalEfektifBPJSKesehatan">
                  <Form.Label>
                    Tanggal Efektif <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Tanggal Efektif" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <h3>Nomor Rekening</h3>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNamaBank">
                  <Form.Label>
                    Nama Bank <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nama Bank" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNamaPemilik">
                  <Form.Label>
                    Nama Pemilik <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nama Pemilik" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNoRekening">
                  <Form.Label>
                    Nomor Rekening <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nomor Rekening" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Link to="/home">
              <Button variant="primary" className="submit-btn">
                Kirim
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EmployeePayroll;
