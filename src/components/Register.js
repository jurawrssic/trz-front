import React, { useState } from "react";
import Inventory from "./Inventory";
import MapContainer from "./MapContainer";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

function Register() {
  const [lonlat, setLonlat] = useState("");

  const onMarkerChange = (lonlat) => {
    setLonlat(lonlat);
  };

  return (
    <Form>
      <h4>New Person</h4>
      <FormGroup>
        <Row className="border-top pt-4">
          <Col xs="8">
            <Label for="personName">Your name:</Label>
            <Input
              className="gray-input"
              type="text"
              name="name"
              id="personName"
              placeholder="Enter your name here..."
            />
          </Col>
          <Col xs="2" className="text-center">
            <Label for="personAge">Age:</Label>
            <Input
              className="gray-input"
              type="number"
              name="age"
              id="personAge"
              placeholder="Enter age..."
            />
          </Col>
          <Col xs="2" className="text-center">
            <Label for="personGender">Gender:</Label>
            <Input type="select" name="gender" id="personGender">
              <option defaultValue disabled>
                -
              </option>
              <option>F</option>
              <option>M</option>
            </Input>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Input
              hidden
              id="personLatLon"
              name="personLatLon"
              type="text"
              defaultValue={lonlat}
            />
            <MapContainer onMarkerChange={onMarkerChange} />
          </Col>
        </Row>
      </FormGroup>
      <h4>Inventory</h4>
      <Inventory />
      <Button outline color="secondary" className="mt-2">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
