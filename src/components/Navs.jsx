import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navs = () => {
  return (
    <Navbar expand="lg" className="navbars">
      <Container>
        <Navbar.Brand className="navbars_brand">
            Dm Tech</Navbar.Brand>
        <Row className=" d-flex flex-row justify-content-end">
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navs">
                <Nav.Link href="/" className="linkss mx-3">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="linkss mx-3">
                  About
                </Nav.Link>
                <Nav.Link href="#experience" className="linkss mx-3">
                  Experience
                </Nav.Link>
                <Nav.Link href="#project" className="linkss mx-3">
                  Projects
                </Nav.Link>
                <Nav.Link href="#contact" className="linkss mx-3">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navs;
