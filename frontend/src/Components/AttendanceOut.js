import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";

const videoConstraints = {
  width: 620,
  height: 450,
  facingMode: "user",
};

const AttendanceOut = () => {
  const webcamRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [capturedData, setCapturedData] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    const timestamp = new Date();
    const payload = {
      image,
      timestamp: timestamp.toISOString(),
    };
    setCapturedData(payload);
    sendToBackend(payload);
  }, [webcamRef]);

  const sendToBackend = async (payload) => {
    try {
      const response = await fetch("http://your-backend-endpoint/api/attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        console.log("Data sent successfully!");
      } else {
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-content">
      <Container className="attendance-in">
        <Row className="my-4">
          <Col>
            <h2>Absensi Karyawan</h2>
            <h3>Keluar</h3>
            <br></br>
            <Webcam
              audio={false}
              height={450}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={620}
              videoConstraints={videoConstraints}
            />
            <Row className="my-4">
              <Col>
                <div className="datetime-container">
                  <p>{currentTime.toLocaleDateString()}</p>
                  <p>{currentTime.toLocaleTimeString()}</p>
                </div>
              </Col>
            </Row>
            <Button onClick={capture} className="picturein">
              Ambil Gambar
            </Button>
            {capturedData && (
              <div className="captured-image">
                <h4>Gambar Terambil:</h4>
                <img src={capturedData.image} alt="Captured" />
                <p>Waktu Absen Keluar: {new Date(capturedData.timestamp).toLocaleString()}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AttendanceOut;