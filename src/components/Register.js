import React, { useState } from "react";
import { Col, Row, Button, Form, Label, Input, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

import Inventory from "./Inventory";
import MapContainer from "./MapContainer";

function Register() {
  const [lonlat, setLonlat] = useState("POINT (47.444 -122.176)");
  const onMarkerChange = (lonlat) => {
    setLonlat(lonlat);
  };

  const [inventory, setInventory] = useState({
    water: 0,
    soup: 0,
    meds: 0,
    weapon: 0,
  });
  const onSubmitInventory = (newInventory) => {
    setInventory(newInventory);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    var inventoryItems =
      "Fiji Water:" +
      inventory.water +
      ";" +
      "Campbell Soup:" +
      inventory.soup +
      ";" +
      "First Aid Pouch:" +
      inventory.meds +
      ";" +
      "AK47:" +
      inventory.weapon;

    axios.post('http://zssn-backend-example.herokuapp.com/api/people.json',
      {
        person: {
          name: data.personName,
          age: data.personAge,
          gender: data.personGender,
          lonlat
        },
        items: inventoryItems
      }
    ).then(response => onReportSent(response.status, response.statusText))
      .catch(error => onReportSent(error, ''))
  };

  const [alertMsg, setAlertMsg] = useState(
  );
  const setAlert = (message) => {
    setAlertMsg(message);
  }
  const onReportSent = (status, text) => {
    var message = status + " - " + text;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setAlert(message);
    if (status === 201) {
      document.getElementById("registerForm").reset();
    }
  }

  return (
    <Form
      id="registerForm"
      name="registerForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Col className="text-center">
        <Alert className={(typeof alertMsg !== 'undefined' && alertMsg.length > 0) ? '' : 'd-none'} color="secondary">
          <h6>{alertMsg}</h6>
        </Alert>
      </Col>
      <h4>New Person</h4>
      <Row className="border-top pt-4">
        <Col xs="8">
          <Label for="personName">Your name:</Label>
          <Input
            className="gray-input"
            type="text"
            name="personName"
            id="personName"
            placeholder="Enter your name here..."
            innerRef={register}
          />
        </Col>
        <Col xs="2" className="text-center">
          <Label for="personAge">Age:</Label>
          <Input
            className="gray-input"
            type="number"
            name="personAge"
            id="personAge"
            placeholder="Enter age..."
            innerRef={register}
          />
        </Col>
        <Col xs="2" className="text-center">
          <Label for="personGender">Gender:</Label>
          <Input
            type="select"
            name="personGender"
            id="personGender"
            defaultValue="-"
            innerRef={register}
          >
            <option disabled>
              -
            </option>
            <option>F</option>
            <option>M</option>
          </Input>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs="12">
          <Input
            hidden
            id="personLonLat"
            name="personLonLat"
            type="text"
            defaultValue={lonlat}
            innerRef={register}
          />
          <MapContainer onMarkerChange={onMarkerChange} />
        </Col>
      </Row>
      <h4>Inventory</h4>
      <Row className="border-top pt-4">
        <Inventory
          onSubmitInventory={onSubmitInventory}
          currentInventory={inventory}
        />
      </Row>
      <Row className="justify-content-center mt-4">
        <Button
          outline
          color="secondary"
          type="submit"
          form="registerForm"
        >
          Submit
      </Button>
      </Row>
    </Form>
  );
}

export default Register;
