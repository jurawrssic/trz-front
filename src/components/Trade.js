import React from "react";
import { Col, Row, Button, Form, Input } from "reactstrap";
import Inventory from "./Inventory";

function Trade() {
  //const [value1, setTradeValue1] = useState("");
  //const [value2, setTradeValue2] = useState("");

  return (
    <Row>
      <Form id="tradeForm" name="tradeForm">
        <Row>
          <Col xs="9">
            <h4>#1 Person's trade cost: </h4>
          </Col>
          <Col xs="3">
            <Input bsSize="sm" placeholder="Insert #1 Persons's ID"></Input>
          </Col>
        </Row>
        <Col xs="12">
          <Inventory />
        </Col>
        <Row className="mt-5">
          <Col xs="9">
            <h4>#2 Person's trade cost: </h4>
          </Col>
          <Col xs="3">
            <Input bsSize="sm" placeholder="Insert #2 Persons's ID"></Input>
          </Col>
        </Row>
        <Col xs="12">
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
