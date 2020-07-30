import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import axios from "axios";
import { render } from "@testing-library/react";
import Inventory from "./Inventory";

function Trade() {
  return (
    <Row>
      <Form>
        <Col xs="12">
          <h4>#1 Person's trade cost: </h4>
          <Inventory />
        </Col>
        <Col xs="12">
          <h4>#2 Person's trade cost: </h4>
          <Inventory />
        </Col>
        <Col className="text-center mt-5">
          <Button outline color="secondary">
            Trade!
          </Button>
        </Col>
      </Form>
    </Row>
  );
}

export default Trade;
