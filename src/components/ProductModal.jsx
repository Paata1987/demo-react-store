import React from "react";
import { Button, Modal, Row, Col, Image } from "react-bootstrap";

const ProductModal = (props) => {
  const {
    title,
    description,
    price,
    rate,
    showModal,
    onHide,
    img,
    isDarkMode,
  } = props;

  const handleClose = () => {
    onHide();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        {" "}
        <Modal.Header
          closeButton
          className={isDarkMode ? "bg-dark" : "bg-ligth"}
        >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Row className={isDarkMode ? "bg-dark" : "bg-ligth"}>
          <Col>
            <Image xs={6} md={4} src={img} className="m-5 col-8" rounded />
          </Col>
          <Col>
            <Modal.Body>
              <div>description: {description}</div>
              <div className="m-3">
                <p>
                  <strong>price: {price} $ </strong>
                  rate: {rate}
                </p>
              </div>
            </Modal.Body>
          </Col>
        </Row>
        <Modal.Footer className={isDarkMode ? "bg-dark" : "bg-ligth"}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
