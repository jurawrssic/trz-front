import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Inventory from "./Inventory";
import axios from "axios";
import { render } from "@testing-library/react";

function Register() {
  return (
    <Form>
      <h4>New Person</h4>
      <FormGroup>
        <Row>
          <Col xs="8">
            <Label for="personName">Your name:</Label>
            <Input
              type="text"
              name="name"
              id="personName"
              placeholder="Enter your name here..."
            />
          </Col>
          <Col xs="2">
            <Label for="personAge">Age:</Label>
            <Input type="number" name="age" id="personAge" placeholder="" />
          </Col>
          <Col xs="2">
            <Label for="personGender">Select</Label>
            <Input
              type="select"
              name="gender"
              id="personGender"
              placeholder=" "
            >
              <option selected disabled>
                {" "}
              </option>
              <option>F</option>
              <option>M</option>
            </Input>
          </Col>
          <Col xs="12">MAP HERE</Col>
        </Row>
      </FormGroup>

      <h4>Inventory</h4>
      <Inventory />

      <Button outline color="secondary">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
