<<<<<<< HEAD
import React, { useRef, useCallback, useState, useEffect } from "react";
=======
import React, { useRef, useCallback } from "react";
>>>>>>> abf3b6cb59471ce5b92d9cf7530b76821dd3c29e
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
<<<<<<< HEAD
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
                <p>Waktu Absen Masuk: {new Date(capturedData.timestamp).toLocaleString()}</p>
              </div>
            )}
=======
            <Webcam audio={false} height={450} ref={webcamRef} screenshotFormat="image/jpeg" width={620} videoConstraints={videoConstraints} />
            <Button onClick={capture} className="picturein">
              Ambil Gambar
            </Button>
>>>>>>> abf3b6cb59471ce5b92d9cf7530b76821dd3c29e
          </Col>
        </Row>
      </Container>
    </div>
  );
};

<<<<<<< HEAD
export default AttendanceIn;
=======
export default AttendanceIn;
>>>>>>> abf3b6cb59471ce5b92d9cf7530b76821dd3c29e
