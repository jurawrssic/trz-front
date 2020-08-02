import React, { useState } from "react";
import { Col, Row, Button, Form, Label, Input } from "reactstrap";
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

  const { register, handleSubmit, errors } = useForm();
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

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: JSON.stringify({
        person: {
          name: data.personName,
          age: data.personAge,
          gender: data.personGender,
          lonlat
        },
        items: inventoryItems
      }),
    };

    const b = axios.post('http://zssn-backend-example.herokuapp.com/api/people.json',
      {
        person: {
          name: data.personName,
          age: data.personAge,
          gender: data.personGender,
          lonlat
        },
        items: inventoryItems
      }
    ).then(response => console.log(response))
      .catch(error => console.log(error))

    console.log(data);
  };

  return (
    <Form
      id="registerForm"
      name="registerForm"
      onSubmit={handleSubmit(onSubmit)}
    >
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
            innerRef={register}
          >
            <option defaultValue disabled>
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
      <Button
        outline
        color="secondary"
        className="mt-2"
        type="submit"
        form="registerForm"
      >
        Submit
      </Button>
    </Form>
  );
}

export default Register;
