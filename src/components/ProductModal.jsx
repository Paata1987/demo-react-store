import React from "react";
import { Button, Modal, Row, Col, Image, ModalBody } from "react-bootstrap";

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
        <ModalBody className={isDarkMode ? "bg-dark" : "bg-ligth"}>
          <Row className={isDarkMode ? "bg-dark" : "bg-ligth"}>
            <Col className="d-flex align-items-center  justify-content-center">
              <Image src={img} className="m-5   col-10" rounded />
            </Col>
            <Col
              style={{ textAlign: "justify" }}
              className="d-flex align-items-center align-text-justify"
            >
              <Modal.Body>
                <div> &nbsp; description: {description}</div>
              </Modal.Body>
            </Col>
          </Row>
        </ModalBody>
        <Modal.Footer className={isDarkMode ? "bg-dark" : "bg-ligth"}>
          <Col>
            {" "}
            <div className="m-3">
              <p>
                <strong>price: {price} $ </strong>
                rate: {rate}
              </p>
            </div>
          </Col>

          <div>
            <Button variant="secondary m-2" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary m-2">+ add</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
