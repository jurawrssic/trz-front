import React from "react";
import { Col, Row, Button, Form, Input, Label } from "reactstrap";
import { useForm } from "react-hook-form";

import Inventory from "./Inventory";

function Trade() {
  //const [value1, setTradeValue1] = useState("");
  //const [value2, setTradeValue2] = useState("");

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {};

  return (
    <Form id="tradeForm" name="tradeForm" onSubmit={handleSubmit(onSubmit)}>
      <h4>Trading</h4>
      <Row className="border-top pt-4">
        <Label>#1 Person</Label>
        <Input></Input>
        <Col xs="12" className="mt-3">
          <Inventory />
        </Col>
      </Row>

      <Row className="border-top pt-4">
        <Label>#2 Person</Label>
        <Input></Input>
        <Col xs="12" className="mt-3">
          <Inventory />
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Button outline className="secondary">
          TRADE!
        </Button>
      </Row>
    </Form>
  );
}

export default Trade;
