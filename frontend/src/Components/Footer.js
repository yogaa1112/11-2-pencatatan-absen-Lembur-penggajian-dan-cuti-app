import React from "react";
import { Container, Row, Col} from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light text-dark mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2024 Workflow. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;