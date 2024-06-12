import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';


function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <Navbar expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">
          <img src="../img/logo.png" height="80" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <input hidden className="check-icon" id="check-icon" name="check-icon" type="checkbox" checked={isNavExpanded} onChange={handleToggle} />
        <label className="icon-menu d-lg-none" htmlFor="check-icon">
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </label>
        <Navbar.Collapse id="basic-navbar-nav" className={isNavExpanded ? 'show' : ''}>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#about">Tentang Kami</Nav.Link>
            <Nav.Link href="#contact">Kontak</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/login">
              <Button variant="outline-primary">Login</Button>
            </Link>
            <Link to="/admin/home">
              <Button variant="primary">
                <span>Dashboard</span></Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
