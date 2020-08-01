import React from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";
import water from "./../assets/water.png";
import soup from "./../assets/food.png";
import meds from "./../assets/aid.png";
import weapon from "./../assets/gun.png";

function Inventory() {
  return (
    <FormGroup>
      <Row className="justify-content-center text-center border-top pt-3">
        <Col xs="3">
          <img src={water} alt="Water" />
          <Label for="inventoryWater">Fiji Water:</Label>
          <Input
            type="number"
            name="water"
            id="inventoryWater"
            placeholder="Enter ammount..."
          />
        </Col>
        <Col xs="3">
          <img src={soup} alt="Soup" />
          <Label for="inventorySoup">Campbell Soup:</Label>
          <Input
            type="number"
            name="soup"
            id="inventorySoup"
            placeholder="Enter ammount..."
          />
        </Col>
        <Col xs="3">
          <img src={meds} alt="Aid" />
          <Label for="inventoryMeds">First Aid Pouch:</Label>
          <Input
            type="number"
            name="meds"
            id="inventoryMeds"
            placeholder="Enter ammount..."
          />
        </Col>
        <Col xs="3">
          <img
            className="d-block"
            style={{ margin: "0 auto" }}
            src={weapon}
            alt="Gun"
          />
          <Label for="inventoryWeapons">AK47:</Label>
          <Input
            type="number"
            name="weapons"
            id="inventoryWeapons"
            placeholder="Enter ammount..."
          />
        </Col>
      </Row>
    </FormGroup>
  );
}

export default Inventory;
