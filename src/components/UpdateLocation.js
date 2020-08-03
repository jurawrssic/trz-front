import React, { useState } from "react";
import { Button, Row, Col, Form, Input } from "reactstrap";

import axios from "axios";

import MapContainer from "./MapContainer";
import RegisteredPeople from "./RegisteredPeople";

function UpdateLocation() {
  const [lonlat, setLonlat] = useState("");
  const onMarkerChange = (newLonlat) => {
    setLonlat(newLonlat);
  };

  const [selectedPerson, setSelectedPerson] = useState({});
  const onSelectPerson = (newlySelectedPerson) => {
    setSelectedPerson(newlySelectedPerson);

  }

  const onSubmit = () => {
    const id = selectedPerson.location.substring(53);
    console.log(id);
    const url = axios.patch('http://zssn-backend-example.herokuapp.com/api/people/' + id + '.json',
      {
        person: {
          name: selectedPerson.name,
          age: selectedPerson.age,
          gender: selectedPerson.gender,
          lonlat
        }
      }
    ).then(response => alert(response.status))
      .catch(error => alert(error))

    console.log(url);
  };

  return (
    <>
      <h4>New Location</h4>
      <Row className="justify-content-center border-top pt-4">
        <Col xs="8">
          <RegisteredPeople screenLocation={"outsideReportComponent"} onSelectPerson={onSelectPerson} />
        </Col>
        <Input
          hidden
          id="personLonLat"
          name="personLonLat"
          defaultValue={lonlat}
        ></Input>
      </Row>
      <Row>
        <Col xs="12">
          <MapContainer onMarkerChange={onMarkerChange} />
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs="12">
          <Button
            outline
            color="secondary"
            form="updateLocationForm"
            className="mt-4"
            onClick={onSubmit}
          >
            Change my Location!
            </Button>
        </Col>
      </Row>
    </>
  );
}

export default UpdateLocation;
