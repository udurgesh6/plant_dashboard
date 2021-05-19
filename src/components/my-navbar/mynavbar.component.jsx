import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo1.jpeg";
import './mynavbar.style.css';

function Mynavbar() {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">

        <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="My Portfolio" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#analysis">Analysis</Nav.Link>
    
          </Nav>

        </Navbar.Collapse>

      </Navbar>
    </>
  );
}

export default Mynavbar

