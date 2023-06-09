import React from "react";
import { Container } from "react-bootstrap";
import TheCarousel from "../components/TheCarousel";
import Products from "../components/Products";

const HomePage = (props) => {
  const { isDarkMode } = props;

  return (
    <>
      <Container className="">
        <TheCarousel />
        <Products isDarkMode={isDarkMode} />
      </Container>
    </>
  );
};

export default HomePage;
