import React, { useState, useEffect } from "react";
import { Table, Input, Row, Col, Button, Alert } from "reactstrap";

import axios from "axios";

import ReportInfectedModal from "./ReportInfectedModal";
import female from "./../assets/female.png";
import male from "./../assets/male.png";
import dead from "./../assets/infected.png";

function PersonTable({ person, index, screenLocation, onSelectPerson, setAlert }) {
  // Change style from in line, and disable button when infected
  const tableStyle = {
    textDecoration: person.infected ? "line-through" : "none",
    color: person.infected ? "rgb(100, 0, 0)" : "#fff",
  };

  const getGender = () => {
    return <img className="gender-icons" src={person.infected ? dead : (person.gender === "F" ? female : male)} alt="Gender" />
  };

  const getButton = () => {
    if (screenLocation === "outside") {
      return <Button onClick={onSelect({ person })}>SELECT!</Button>
    } else {
      return <ReportInfectedModal name={person.name} location={person.location} setAlert={setAlert} />;
    }
  }

  const onSelect = (newlySelectedPerson) => {
    onSelectPerson(newlySelectedPerson);
  }
  return (
    <>
      <tbody>
        <tr key={index + 1} style={tableStyle}>
          <th scope="row">{getGender()}</th>
          <td className="pt-3">{person.name}</td>
          <td className="pt-3">{person.age}</td>
          <td className="pt-3">{person.lonlat}</td>
          <td>
            {getButton()}
          </td>
        </tr>
      </tbody>
    </>
  );
}

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
            <th>REPORT</th>
          </tr>
        </thead>
        {searchResults.map((person, index) => (
          <PersonTable key={index} index={index} person={person} screenLocation={screenLocation} onSelectPerson={onSelectPerson} setAlert={setAlert} />
        ))}
      </Table>
    </>
  );
}

export default RegisteredPeople;
