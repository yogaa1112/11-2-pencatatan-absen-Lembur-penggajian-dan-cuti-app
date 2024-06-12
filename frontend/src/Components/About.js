import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
        <h2 className="text-center mb-5">Tentang Kami</h2>
          <Col md={6}>
            <img src="../img/about.png" alt="About Us" className="img-fluid" />
          </Col>          
          <Col md={6}>
            <p>
              Selamat datang di <strong>Workflow</strong>, solusi terdepan untuk manajemen absensi, 
              lembur, cuti, dan penggajian. Kami memahami betapa pentingnya efisiensi dan akurasi dalam 
              mengelola sumber daya manusia, dan itulah mengapa kami menghadirkan Workflow, aplikasi yang 
              dirancang untuk memenuhi kebutuhan manajemen HR Anda dengan mudah dan efektif.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
