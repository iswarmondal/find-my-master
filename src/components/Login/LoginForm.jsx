import React from "react";
import { Form, Button } from "react-bootstrap";

function LoginForm(props) {
  return (
    <div>
      <br />
      <Form action={props.action}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="lg" type="email" placeholder="Enter email" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control size="lg" type="password" placeholder="Password" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <br />
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
