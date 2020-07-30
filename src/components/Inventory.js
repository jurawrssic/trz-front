import React from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";

function Inventory() {
  return (
    <FormGroup>
      <Row>
        <Col xs="3">
          <Label for="personAge">Fiji Water:</Label>
          <Input type="number" name="age" id="personAge" placeholder="" />
        </Col>
        <Col xs="3">
          <Label for="personAge">Campbell Soup:</Label>
          <Input type="number" name="age" id="personAge" placeholder="" />
        </Col>
        <Col xs="3">
          <Label for="personAge">First Aid Pouch:</Label>
          <Input type="number" name="age" id="personAge" placeholder="" />
        </Col>
        <Col xs="3">
          <Label for="personAge">AK47:</Label>
          <Input type="number" name="age" id="personAge" placeholder="" />
        </Col>
      </Row>
    </FormGroup>
  );
}

export default Inventory;
