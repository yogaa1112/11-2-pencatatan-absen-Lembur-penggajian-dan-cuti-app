import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";

const videoConstraints = {
  width: 620,
  height: 450,
  facingMode: "user",
};

const AttendanceIn = () => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    // You can send the image to a server here or save it locally
  }, [webcamRef]);

  return (
    <div className="main-content">
      <Container className="attendance-in">
        <Row className="my-4">
          <Col>
            <h2>Absensi Karyawan</h2>
            <h3>Masuk</h3>
            <br></br>
            <Webcam audio={false} height={450} ref={webcamRef} screenshotFormat="image/jpeg" width={620} videoConstraints={videoConstraints} />
            <Button onClick={capture} className="picturein">
              Ambil Gambar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AttendanceIn;
