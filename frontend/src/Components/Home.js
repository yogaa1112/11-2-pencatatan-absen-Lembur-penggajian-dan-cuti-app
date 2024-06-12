import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function Home() {
  return (
    <section id="home" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <h1 style={{ fontSize: '4rem' }}>WELCOME TO <span className="workflow">WORKFLOW</span></h1>
            <p>Platform terpadu untuk penggajian, cuti, lembur, dan kehadiran</p>
          </Col>
          <Col md={7}>
            <img src="./img/home.png" alt="About Us" className="img-fluid" />
          </Col>          

        </Row>
      </Container>
    </section>
  );
}

export default Home;
