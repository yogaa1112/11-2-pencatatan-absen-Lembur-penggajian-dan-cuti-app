import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const EmployeeStaff = () => {
  const [formData, setFormData] = useState({
    employee_id: '',
    status: '',
    position: '',
    join_date: '',
    work_placement: '',
    bank_name: '',
    account_holder_name: '',
    account_number: '',
    salary_amount: '',
    salary_date: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    formData.employee_id = localStorage.getItem('employee_id');

    try {
      await axios.post(`${process.env.REACT_APP_REMOTE_URL}/employee/add/payroll`, formData)
      .then(res => {
        if (res.data.message === 'error') {
          alert('Failed to add employee staff data, Server is down');
          return;
        }
        navigate('/admin/employees');
      });
    } catch (e) {
      alert('Failed to add employee staff data, Server is down');
      return;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content-admin">
        <div className="form-container">
          <h2>Enter Employee Data</h2>
          <br />
          <h3>Employment Information</h3>
          <br />
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEmployeeStatus">
                  <Form.Label>
                    Employee Status<span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Permanent / Contract"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
              <Col md={6}>
                <Form.Group controlId="formPosition">
                  <Form.Label>
                    Position <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formJoinDate">
                  <Form.Label>
                    Join Date <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Join Date"
                    name="join_date"
                    value={formData.join_date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <br />
              <Col md={6}>
                <Form.Group controlId="formWorkPlacement">
                  <Form.Label>
                    Work Placement <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Work Placement"
                    name="work_placement"
                    value={formData.work_placement}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <h3>Payroll Information</h3>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formBankName">
                  <Form.Label>
                    Bank Name <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Bank Name"
                    name="bank_name"
                    value={formData.bank_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Form.Group controlId="formAccountHolderName">
                  <Form.Label>
                    Account Holder Name <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Account Holder Name"
                    name="account_holder_name"
                    value={formData.account_holder_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Form.Group controlId="formAccountNumber">
                  <Form.Label>
                    Account Number <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Account Number"
                    name="account_number"
                    value={formData.account_number}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formSalaryAmount">
                  <Form.Label>
                    Salary Amount <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Salary Amount"
                    name="salary_amount"
                    value={formData.salary_amount}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formSalaryDate">
                  <Form.Label>
                    Salary Date <span className="required-asterisk">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Salary Date"
                    name="salary_date"
                    value={formData.salary_date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Button variant="primary" className="submit-btn" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStaff;
