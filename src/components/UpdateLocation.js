import React, { useState } from "react";
import { Button, Row, Col, Input, Alert } from "reactstrap";

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
    setAlertMsg("Selected " + newlySelectedPerson.name + ", " + newlySelectedPerson.gender + ", " + newlySelectedPerson.age + ". You can now choose your new location on the map")
  }

  const onSubmit = () => {
    if (selectedPerson.location === undefined) {
      setAlertMsg("Select a person to change location!")
    } else {
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
      ).then(response => onReportSent(response.status, response.statusText))
        .catch(error => alert(error))
    }

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
    if (status == 200) {
      setSelectedPerson('');
      setLonlat('');
    }
  }

  return (
    <>
      <Col className="text-center">
        <Alert className={(typeof alertMsg !== 'undefined' && alertMsg.length > 0) ? '' : 'd-none'} color="secondary">
          <h6>{alertMsg}</h6>
        </Alert>
      </Col>
      <h4>New Location</h4>
      <Row className="justify-content-center border-top pt-4">
        <Col xs="11">
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
        <Col xs="12" id="map">
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
