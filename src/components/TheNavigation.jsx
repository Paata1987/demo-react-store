import React from "react";
import { Container, Navbar, NavLink } from "react-bootstrap";

const TheNavigation = () => {
  return (
    <div>
      <Container>
        <Navbar className="bg-light">
          <Container>
            <NavLink>women's clothing</NavLink>
            <NavLink>men's clothing</NavLink>
            <NavLink>Jewelry</NavLink>
            <NavLink>electronics</NavLink>
            <NavLink>About</NavLink>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default TheNavigation;
