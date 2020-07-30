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
          <Inventory />
        </Col>
        <Col xs="12">
          <Inventory />
        </Col>
        <Button outline color="secondary">
          Submit
        </Button>
      </Form>
    </Row>
  );
}

export default Trade;
