import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from 'axios'
import { getCurrentUser } from "./Services/getCurrentUser";

const videoConstraints = {
  width: 620,
  height: 450,
  facingMode: "user",
};

const AttendanceIn = () => {
  const navigate = useNavigate();

  const webcamRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [capturedData, setCapturedData] = useState(null);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData.user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    const timestamp = new Date();
    const payload = {
      user: user, // Include user data here
      image,
      timestamp: timestamp.toISOString(),
    };
    setCapturedData(payload);
    sendToBackend(payload);
  }, [webcamRef, user]); // Add user to the dependency array

  const sendToBackend = async (payload) => {
    try {
      console.log(user); // This should now log the correct user data
      const response = await axios.post(`${process.env.REACT_APP_REMOTE_URL}/employee/attendance/out`, payload).then(res => {
        if (res.data.message == 'success') {
          alert("Attendance successfully recorded");
          navigate("/user/userattendance");
        } else {
          alert("Attendance failed to be recorded, Server is down");
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user || !user.employee) {
    return <div>No user data available</div>;
  }

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

export default AttendanceIn;
