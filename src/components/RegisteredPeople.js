import React, { useState, useEffect } from "react";
import { Table, Input, Row, Col, Button, Alert } from "reactstrap";

import axios from "axios";

import RegisteredPeopleTable from "./RegisteredPeopleTable"

function RegisteredPeople({ screenLocation, onSelectPerson }) {
  const [people, setPeople] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const url = "http://zssn-backend-example.herokuapp.com/api/people.json";
    axios.get(url).then((response) => setPeople(response.data));

    const results = people.filter((person, index) =>
      person.name
        .toString()
        .toLowerCase()
        .includes(searchQuery.toString().toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  const [alertMsg, setAlertMsg] = useState(
  );
  const setAlert = (message) => {
    setAlertMsg(message);
  }

  return (
    <>
      <Col xs="12" className="mb-3">
        <Input
          type="text"
          placeholder="Search for Survivor's name..."
          id="searchQuery"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
        ></Input>
      </Col>
      <Col className="text-center">
        <Alert className={(typeof alertMsg !== 'undefined' && alertMsg.length > 0) ? '' : 'd-none'} color="secondary">
          <h6>{alertMsg}</h6>
        </Alert>
      </Col>
      <Table hover borderless className="text-center text-white">
        <thead>
          <tr>
            <th>PERSON</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>LOCATION</th>
            <th>{screenLocation === "outsideReportComponent" ? 'SELECT' : 'REPORT'} </th>
          </tr>
        </thead>
        {searchResults.map((person, index) => (
          <RegisteredPeopleTable key={index} index={index} person={person} screenLocation={screenLocation} onSelectPerson={onSelectPerson} setAlert={setAlert} />
        ))}
      </Table>
    </>
  );
}

export default RegisteredPeople;
