import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../styles/TheNavigation.module.css";
import { Link } from "react-router-dom";

function BasicExample({ isDarkMode }) {
  return (
    <Navbar expand="lg" sticky="top" variant={isDarkMode ? "dark" : "light"}>
      <Container className={styles.custom__navigation_dark}>
        <Navbar.Brand> Ambermart </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item>women's clothing</NavDropdown.Item>
              <NavDropdown.Item>men's clothing</NavDropdown.Item>
              <NavDropdown.Item>Jewelry</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
