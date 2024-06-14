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
<<<<<<< HEAD
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

=======

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
