import React from "react";
import { Container } from "react-bootstrap";
import TheCarousel from "../components/TheCarousel";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <>
      <Container className="">
        <TheCarousel />
        <Products />
      </Container>
    </>
  );
};

export default HomePage;
