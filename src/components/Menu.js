import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"

function Menu() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://e.top4top.io/p_1928lxikv1.png"
            width="150px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link smooth={true} to="home" offset={-100} className="nav-link" href="#">
              الصفحة الرئيسية
            </Link>
            <Link smooth={true} to="whoAre" offset={-70} className="nav-link" href="#">
              من نحن
            </Link>
            <Link smooth={true} to="gallery" offset={-70} className="nav-link" href="#">
              معرض الاعمال
            </Link>
            <Link smooth={true} to="contact" offset={-70} className="nav-link" href="#">
              تواصل معنا
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
