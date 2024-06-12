import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "./UserSidebar";
import "../App.css";
import { Link } from "react-router-dom";

const LeaveApplication = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content-admin">
        <div className="form-container">
          <h2>Data Pengajuan Cuti</h2>
          <br></br>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNamaKaryawan">
                  <Form.Label>
                    Nama Karyawan<span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="masukkan data karyawan" />
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
                <Form.Group controlId="formTanggalMulai">
                  <Form.Label>
                    Tanggal Mulai <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Tanggal Mulai cuti" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formTanggalSelesai">
                  <Form.Label>
                    Tanggal Selesai <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Tanggal selesai cuti" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formKeterangan">
                  <Form.Label>
                    Keterangan Cuti <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Keterangan Pengajuan cuti" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Link to="/user/userleave">
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

export default LeaveApplication;
