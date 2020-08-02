import React from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";

import waterIcon from "./../assets/water.png";
import soupIcon from "./../assets/food.png";
import medsIcon from "./../assets/aid.png";
import weaponIcon from "./../assets/gun.png";

function Inventory({ onSubmitInventory, currentInventory }) {
  const onChangeWater = (e) => {
    const newInventory = { ...currentInventory, water: e.target.value };
    onSubmitInventory(newInventory);
  };

  const onChangeSoup = (e) => {
    const newInventory = { ...currentInventory, soup: e.target.value };
    onSubmitInventory(newInventory);
  };

  const onChangeMeds = (e) => {
    const newInventory = { ...currentInventory, meds: e.target.value };
    onSubmitInventory(newInventory);
  };

  const onChangeWeapon = (e) => {
    const newInventory = { ...currentInventory, weapon: e.target.value };
    onSubmitInventory(newInventory);
  };

  return (
    <FormGroup>
      <Row className="justify-content-center text-center">
        <Col xs="3">
          <img src={waterIcon} alt="Water" />
          <Label for="inventoryWater">Fiji Water:</Label>
          <Input
            type="number"
            name="inventoryWater"
            id="inventoryWater"
            placeholder="Enter ammount..."
            onChange={onChangeWater}
          />
        </Col>
        <Col xs="3">
          <img src={soupIcon} alt="Soup" />
          <Label for="inventorySoup">Campbell Soup:</Label>
          <Input
            type="number"
            name="inventorySoup"
            id="inventorySoup"
            placeholder="Enter ammount..."
            onChange={onChangeSoup}
          />
        </Col>
        <Col xs="3">
          <img src={medsIcon} alt="Aid" />
          <Label for="inventoryMeds">First Aid Pouch:</Label>
          <Input
            type="number"
            name="inventoryMeds"
            id="inventoryMeds"
            placeholder="Enter ammount..."
            onChange={onChangeMeds}
          />
        </Col>
        <Col xs="3">
          <img
            className="d-block"
            style={{ margin: "0 auto" }}
            src={weaponIcon}
            alt="Gun"
          />
          <Label for="inventoryWeapon">AK47:</Label>
          <Input
            type="number"
            name="inventoryWeapon"
            id="inventoryWeapon"
            placeholder="Enter ammount..."
            onChange={onChangeWeapon}
          />
        </Col>
      </Row>
    </FormGroup>
  );
}

export default Inventory;
