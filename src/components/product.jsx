import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/Product.module.css";
import ProductModal from "./ProductModal";
import { useState } from "react";

const Product = (props) => {
  const { img, title, description, price, rate } = props;
  const { isDarkMode } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleAdd = () => {
    console.log("add.pr =>>>>");
  };

  return (
    <>
      <ProductModal
        onHide={handleClose}
        showModal={show}
        title={title}
        description={description}
        price={price}
        rate={rate}
        img={img}
        isDarkMode={isDarkMode}
      />

      <div className="mt-2  col-6 col-md-4 col-lg-3 d-flex">
        {" "}
        <Card
          onClick={handleShow}
          className={`${styles.card} ${
            isDarkMode ? "bg-secondary" : "bg-light"
          }`}
        >
          <div className={styles.img}>
            <Card.Img className={styles.src} src={img} alt={title} />
          </div>
          <Card.Body>
            <Card.Title as="h5">{title.substring(0, 15)} </Card.Title>
            <div
              className={`me-2 d-inline-block  text-truncate ${styles.description}`}
            >
              {description}
            </div>
            <div className="d-flex justify-content-center  mt-3 ">
              <strong>Price</strong>: <strong> {price} $</strong>
            </div>
          </Card.Body>
          <Card.Footer className={styles.footer}>
            <Button className={styles.button} onClick={handleAdd}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart4 m-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Product;
