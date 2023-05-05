import React from "react";
import { Button, Modal } from "react-bootstrap";

const ProductModal = (props) => {
  const { title, description, price, rate, showModal, onHide } = props;

  const handleClose = () => {
    onHide();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>description: {description}</div>
          <p>
            price: {price} rate: {rate}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
