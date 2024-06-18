import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import useCurrentUser from './Services/useCurrentUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


const EmployeePersonal = () => {
  const { user, loading, error } = useCurrentUser();
  const [formData, setFormData] = useState({
    admin_id: '',
    full_name: '',
    nik: '',
    gender: '',
    religion: '',
    birth_place: '',
    birth_date: '',
    email: '',
    password: '',
    address: '',
    wa_phone: '',
    education_level: '',
    instituition_name: '',
    study_program: '',
    confirm_pw: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        admin_id: user.admin_id,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Trim whitespace from password fields
    const trimmedPassword = formData.password.trim();
    const trimmedConfirmPw = formData.confirm_pw.trim();

    if (trimmedPassword !== trimmedConfirmPw) {
      alert('Confirm password does not match with password');
      return;
    }

    try {
      const dataToSubmit = { ...formData, password: trimmedPassword };
      delete dataToSubmit.confirm_pw;

      await axios.post(`${process.env.REACT_APP_REMOTE_URL}/employee/add/personal`, dataToSubmit)
      .then(res => {
        if (res.data.message == 'error') {
          alert('Failed to add employee data, Server is down');
          return;
        }
        localStorage.setItem('employee_id', res.data.id);
        navigate('/admin/employee-staff');
      });
    } catch (e) {
      alert('Failed to add employee data, Server is down');
      return;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content-admin">
        <div className="form-container">
          <h2>Enter Employee Data</h2>
          <br />
          <h3>Personal Information</h3>
          <br />
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formfull_name">
                  <Form.Label>
                    Full Name <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNIK">
                  <Form.Label>
                    NIK <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="NIK"
                    name="nik"
                    value={formData.nik}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
              <Col md={6}>
                <Form.Group controlId="formGender">
                  <Form.Label>
                    Gender <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formReligion">
                  <Form.Label>
                    Religion <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Religion"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
              <Col md={6}>
                <Form.Group controlId="formbirth_place">
                  <Form.Label>
                    Birth Place <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Birth Place"
                    name="birth_place"
                    value={formData.birth_place}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formbirth_date">
                  <Form.Label>
                    Birth Date <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Birth Date"
                    name="birth_date"
                    value={formData.birth_date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br /> <br />
            <h3>Contact Information</h3>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>
                    Email <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
              <Col md={6}>
                <Form.Group controlId="formwa_phone">
                  <Form.Label>
                    Phone Number <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="wa_phone"
                    value={formData.wa_phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Form.Group controlId="formAddress">
                  <Form.Label>
                    Address <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPassword">
                  <Form.Label>
                    Password <span className="required-asterisk">*</span>
                  </Form.Label>
                  <div className="password-input-container">
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      className="password-toggle-icon"
                    />
                  </div>
                </Form.Group>
              </Col>
              <br />
              <Col md={6}>
                <Form.Group controlId="formProvince">
                  <Form.Label>
                    Confirm Password <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="confirm_pw"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
           
            <br />
           
            <h3>Education</h3>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEducationLevel">
                  <Form.Label>
                    Education Level <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Education Level"
                    name="education_level"
                    value={formData.education_level}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
              <Col md={6}>
                <Form.Group controlId="formInstitutionName">
                  <Form.Label>
                    Institution Name <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Institution Name"
                    name="instituition_name"
                    value={formData.instituition_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Form.Group controlId="formStudyProgram">
                  <Form.Label>
                    Study Program <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Study Program"
                    name="study_program"
                    value={formData.study_program}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
            </Row>
            <br />
            <Button variant="primary" className="submit-btn" type="submit">
              Next
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EmployeePersonal;
