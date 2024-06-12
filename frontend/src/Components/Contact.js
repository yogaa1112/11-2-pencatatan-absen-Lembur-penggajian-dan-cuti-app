import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Kontak</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama Anda" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email Anda" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="formMessage">
                <Form.Label>Pesan</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Masukkan pesan Anda" />
              </Form.Group>
              <br></br>
              <Button variant="primary" type="submit">
                Kirim
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Lokasi Kami</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4054182206777!2d110.437081!3d-7.0300416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708a4bcb6e7d9b%3A0x35f69bb0e5c0e1e3!2sUniversitas%20Ivet!5e0!3m2!1sen!2sid!4v1688207285277!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
