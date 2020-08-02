import React, { useState } from "react";
import { Button, Row, Col, Form, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";

import MapContainer from "./MapContainer";
import RegisteredPeople from "./RegisteredPeople";

function UpdateLocation() {
  const [lonlat, setLonlat] = useState("");
  const onMarkerChange = (lonlat) => {
    setLonlat(lonlat);
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ infected: data.reportedPersonID }),
    };

    fetch(
      "http://zssn-backend-example.herokuapp.com/api/people/" +
        data.reportedBy +
        "/report_infection.json",
      requestOptions
    )
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  };

  return (
    <>
      <Form
        id="updateLocationForm"
        name="updateLocationForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>New Location</h4>
        <Row className="justify-content-center border-top pt-4">
          <Col xs="8">
            <RegisteredPeople />
          </Col>
          <Input
            hidden
            id="personLonLat"
            name="personLonLat"
            defaultValue={lonlat}
            innerRef={register}
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
              type="submit"
              className="mt-4"
            >
              Change my Location!
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default UpdateLocation;
