import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import styles from "../styles/LoginPage.module.css";

function BasicExample() {
  return (
    <>
      <Card className={styles.login}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mclb0NdAfReSwkqWDtxIh2Oc4vEyPMYzeg&usqp=CAU"
        />
        <Card.Body>
          <Card.Title className="text-center mb-5 ">Login</Card.Title>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default BasicExample;
