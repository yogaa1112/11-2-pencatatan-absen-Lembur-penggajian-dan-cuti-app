import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../App.css";
import { Link } from "react-router-dom";

const EmployeePersonal = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content-admin">
        <div className="form-container">
          <h2>Masukkan Data Karyawan</h2>
          <br></br>
          <h3>Informasi Pribadi</h3>
          <br></br>
          <Form>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNamaLengkap">
                  <Form.Label>
                    Nama Lengkap <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nama Lengkap" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNIK">
                  <Form.Label>
                    NIK <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="NIK" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formJenisKelamin">
                  <Form.Label>
                    Jenis Kelamin <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Jenis Kelamin" />
                </Form.Group>
              </Col>
              <br></br>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formAgama">
                  <Form.Label>
                    Agama <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Agama" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formPendidikan">
                  <Form.Label>
                    Pendidikan <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Pendidikan" />
                </Form.Group>
              </Col>
              <br></br>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formTempatLahir">
                  <Form.Label>
                    Tempat Lahir <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Tempat Lahir" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formTanggalLahir">
                  <Form.Label>
                    Tanggal Lahir <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Tanggal Lahir" />
                </Form.Group>
              </Col>
              <br></br>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formGolonganDarah">
                  <Form.Label>
                    Golongan Darah <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Golongan Darah" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formKewarganegaraan">
                  <Form.Label>
                    Kewarganegaraan <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Kewarganegaraan" />
                </Form.Group>
              </Col>
              <br></br>
            </Row>
            <br></br>
            <h3>Informasi Kontak</h3>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>
                    Email <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formNoTelp">
                  <Form.Label>
                    No TLP/HP <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="No TLP/HP" />
                </Form.Group>
              </Col>
              <br></br>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formAlamatKTP">
                  <Form.Label>
                    Alamat KTP <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Alamat KTP" />
                </Form.Group>
              </Col>
              <br></br>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNegara">
                  <Form.Label>
                    Negara <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Negara" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formProvinsi">
                  <Form.Label>
                    Provinsi <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Provinsi" />
                </Form.Group>
              </Col>
              <br></br>
              <Col md={6}>
                <Form.Group controlId="formKota">
                  <Form.Label>
                    Kota <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Kota" />
                </Form.Group>
              </Col>
              <br></br>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formNamaKontakDarurat">
                  <Form.Label>
                    Nama Kontak Darurat <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nama Kontak Darurat" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formTeleponDarurat">
                  <Form.Label>
                    Telepon Darurat <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Telepon Darurat" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <h3>Pendidikan Terakhir</h3>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formJenjangPendidikan">
                  <Form.Label>
                    Jenjang Pendidikan Terakhir <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Jenjang Pendidikan Terakhir" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNamaInstitusi">
                  <Form.Label>
                    Nama Institusi Pendidikan <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Nama Institusi Pendidikan" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formProgramStudi">
                  <Form.Label>
                    Program Studi <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Program Studi" />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Link to="/admin/employee-staff">
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

export default EmployeePersonal;
