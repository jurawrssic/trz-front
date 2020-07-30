import React from "react";
import axios from "axios";
import Inventory from "./Inventory";
import Map from "./Map";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./../App.css";

function Register() {
  return (
    <Form>
      <h4>New Person</h4>
      <FormGroup>
        <Row>
          <Col xs="8">
            <Label for="personName">Your name:</Label>
            <Input
              className="gray-input"
              type="text"
              name="name"
              id="personName"
              placeholder="Enter your name here..."
            />
          </Col>
          <Col xs="2" className="text-center">
            <Label for="personAge">Age:</Label>
            <Input
              className="gray-input"
              type="number"
              name="age"
              id="personAge"
              placeholder="Enter age..."
            />
          </Col>
          <Col xs="2" className="text-center">
            <Label for="personGender">Gender:</Label>
            <Input type="select" name="gender" id="personGender">
              <option selected disabled>
                -
              </option>
              <option>F</option>
              <option>M</option>
            </Input>
          </Col>
          <Col xs="12" className="pt-5 pb-3">
            MAP HERE
          </Col>
        </Row>
      </FormGroup>

      <h4>Inventory</h4>
      <Inventory />

      <Button outline color="secondary" className="mt-2">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
