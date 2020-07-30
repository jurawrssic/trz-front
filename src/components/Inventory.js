import React from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";
import water from "./../assets/water-bottle.png";
import soup from "./../assets/soup.png";
import meds from "./../assets/first-aid.png";
import weapon from "./../assets/ak-47.png";

function Inventory() {
  return (
    <FormGroup>
      <Row className="text-center d-flex">
        <Col xs="3">
          <img className="items-icon" src={water} alt="Water Bottle" />
          <br></br>
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
          <img src={meds} alt="Medication" />
          <Label for="inventoryMeds">First Aid Pouch:</Label>
          <Input
            type="number"
            name="meds"
            id="inventoryMeds"
            placeholder="Enter ammount..."
          />
        </Col>
        <Col xs="3">
          <img src={weapon} alt="AK-47" />
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
