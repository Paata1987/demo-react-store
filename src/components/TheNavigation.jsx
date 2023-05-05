import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { getCategory } from "../service/api";

const TheNavigation = ({ isDarkMode }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const catoegories = await getCategory();
      setCategory(catoegories);
    };
    getAllCategories();
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        className={isDarkMode ? "bg-dark  " : "bg-light "}
        variant={isDarkMode ? "dark  " : "light "}
      >
        <Container>
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
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                {category.sort().map((categoryName, idx) => (
                  <NavDropdown.Item
                    className={isDarkMode ? "bg-dark text-light" : "bg-light"}
                    key={idx + 2}
                  >
                    {categoryName}{" "}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TheNavigation;
