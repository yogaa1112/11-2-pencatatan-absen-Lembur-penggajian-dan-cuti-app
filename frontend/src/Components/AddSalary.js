import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../App.css";
import { Link } from "react-router-dom";

const AddSalary = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content-admin">
        <div className="form-container">
          <h2>Masukkan Gaji Karyawan</h2>
          <br></br>
          <Form>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNamaKaryawan">
                  <Form.Label>
                    Nama Karyawan <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nama Karyawan" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formPeriode">
                  <Form.Label>
                    Periode <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Periode" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formJabatan">
                  <Form.Label>
                    Jabatan <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nama Jabatan" />
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
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNoGaji">
                  <Form.Label>
                    Gaji <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nomor Gaji" />
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

export default AddSalary;
