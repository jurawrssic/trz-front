import React, { useState } from "react";
import { Col, Row, Button, Form, Label, Alert } from "reactstrap";

import axios from "axios";

import Inventory from "./Inventory";
import RegisteredPeople from "./RegisteredPeople";

function Trade() {
  const itemCost = {
    waterCost: 14,
    soupCost: 12,
    medsCost: 10,
    weaponCost: 8,
  }

  const [person1, setPerson1] = useState('');
  const onSelectPerson1 = (newlySelectedPerson1) => {
    setPerson1(...person1, newlySelectedPerson1);
    setAlertMsg("Selected " + newlySelectedPerson1.name + ", " + newlySelectedPerson1.gender + ", " + newlySelectedPerson1.age + " as Person #1")
  }
  const [tradeQty1, setTradeQty1] = useState({
    water: 0,
    soup: 0,
    meds: 0,
    weapon: 0,
  });

  const [tradeCost1, setTradeCost1] = useState(0);
  const onSubmitTrade1 = (newTradeQty1) => {
    setTradeQty1(newTradeQty1);
    setTradeCost1((newTradeQty1.water * itemCost.waterCost) + (newTradeQty1.soup * itemCost.soupCost) + (newTradeQty1.meds * itemCost.medsCost) + (newTradeQty1.weapon * itemCost.weaponCost));
  }

  const [person2, setPerson2] = useState('');
  const onSelectPerson2 = (newlySelectedPerson2) => {
    setPerson2(...person2, newlySelectedPerson2);
    setAlertMsg("Selected " + newlySelectedPerson2.name + ", " + newlySelectedPerson2.gender + ", " + newlySelectedPerson2.age + " as Person #2")
  }
  const [tradeQty2, setTradeQty2] = useState({
    water: 0,
    soup: 0,
    meds: 0,
    weapon: 0,
  });
  const [tradeCost2, setTradeCost2] = useState(0);
  const onSubmitTrade2 = (newTradeQty2) => {
    setTradeQty2(newTradeQty2);
    setTradeCost2((newTradeQty2.water * itemCost.waterCost) + (newTradeQty2.soup * itemCost.soupCost) + (newTradeQty2.meds * itemCost.medsCost) + newTradeQty2.weapon * itemCost.weaponCost);
  }

  const [alertMsg, setAlertMsg] = useState(
  );
  const setAlert = (message) => {
    setAlertMsg(message);
  }

  const compareTradeCost = {
    color: tradeCost1 === tradeCost2 ? "#017a26" : "#a10202",
  }

  const onSubmit = () => {
    if (tradeCost1 !== tradeCost2) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      return setAlert("Trade cost must be the same on both sides!");
    } if (person1.location === undefined || person2.location === undefined) {
      return setAlert("Must select person on both sides of the trade!");
    } else {
      const itemsPick =
        "Fiji Water:" +
        tradeQty2.water +
        ";" +
        "Campbell Soup:" +
        tradeQty2.soup +
        ";" +
        "First Aid Pouch:" +
        tradeQty2.meds +
        ";" +
        "AK47:" +
        tradeQty2.weapon;

      const itemsPayment =
        "Fiji Water:" +
        tradeQty1.water +
        ";" +
        "Campbell Soup:" +
        tradeQty1.soup +
        ";" +
        "First Aid Pouch:" +
        tradeQty1.meds +
        ";" +
        "AK47:" +
        tradeQty1.weapon;

      const id = person1.location.substring(53);
      const url = axios.post('http://zssn-backend-example.herokuapp.com/api/people/' + id + '/properties/trade_item.json',
        {
          consumer: {
            name: person2.name,
            pick: itemsPick,
            payment: itemsPayment
          }
        }
      ).then(response => onSubmitTrade(response.status, response.statusText))
        .catch(error => onSubmitTrade(error, ''))
    }
  };

  const onSubmitTrade = (status, text) => {
    var message = status + " - " + text;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setAlert(message);
    if (status === 204) {
      document.getElementById("tradeForm").reset();
    }
  }

  return (
    <Form id="tradeForm" name="tradeForm">
      <Col className="text-center">
        <Alert className={(typeof alertMsg !== 'undefined' && alertMsg.length > 0) ? '' : 'd-none'} color="secondary">
          <h6>{alertMsg}</h6>
        </Alert>
      </Col>
      <h4>Trading</h4>
      <Row className="border-top pt-4" id="select1">
        <Label className="ml-3"><h6>Select Person #1</h6></Label>
        <RegisteredPeople screenLocation={"outsideReportComponent"} onSelectPerson={onSelectPerson1} />
        <Col xs="12" className="mt-3" id="inventory1">
          <Inventory onSubmitInventory={onSubmitTrade1} currentInventory={tradeQty1} />
        </Col>
      </Row>

      <Row className="border-top pt-4" id="select2">
        <Label className="ml-3"><h6>Select Person #2</h6></Label>
        <RegisteredPeople screenLocation={"outsideReportComponent"} onSelectPerson={onSelectPerson2} />
        <Col xs="12" className="mt-3" id="inventory2">
          <Inventory onSubmitInventory={onSubmitTrade2} currentInventory={tradeQty2} />
        </Col>
      </Row>

      <Row className="text-center mt-4">
        <Col>
          <h5>#1 cost vs #2 cost</h5>
        </Col>
      </Row>
      <Row className="text-center">
        <Col style={compareTradeCost}>
          <h6>{tradeCost1} x {tradeCost2}</h6>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <Button outline className="secondary" onClick={onSubmit}>
            TRADE!
        </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Trade;
