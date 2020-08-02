import React, { useState, useEffect } from "react";
import { Table, Input, Row, Col, Label } from "reactstrap";

import axios from "axios";

import ReportInfectedModal from "./ReportInfectedModal";
import female from "./../assets/female.png";
import male from "./../assets/male.png";
import dead from "./../assets/infected.png";

function PersonTable({ person, index }) {
  // Change style from in line, and disable button when infected
  const tableStyle = {
    textDecoration: person.infected ? "line-through" : "none",
    color: person.infected ? "rgb(100, 0, 0)" : "#fff",
  };

  const getGender = () => {
    if (person.infected) {
      return <img className="gender-icons" src={dead} alt="Location img" />;
    } else if (person.gender === "F") {
      return <img className="gender-icons" src={female} alt="Location img" />;
    } else if (person.gender === "M") {
      return <img className="gender-icons" src={male} alt="Location img" />;
    }
  };

  return (
    <>
      <tbody>
        <tr key={index + 1} style={tableStyle}>
          <th scope="row">{getGender()}</th>
          <td className="pt-3">{person.name}</td>
          <td className="pt-3">{person.age}</td>
          <td className="pt-3">{person.lonlat}</td>
          <td>
            <ReportInfectedModal name={person.name} id={person.id} />
          </td>
        </tr>
      </tbody>
    </>
  );
}

function People() {
  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const url = "http://zssn-backend-example.herokuapp.com/api/people.json";
    axios.get(url).then((response) => setPeople(response.data));
    setSearchResults(people);
    const results = people.filter((person, index) =>
      person.name
        .toString()
        .toLowerCase()
        .includes(searchQuery.toString().toLowerCase())
    );
    console.log(searchQuery);
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <>
      <h4>Registered People</h4>
      <Row className="justify=content-center border-top pt-4">
        <Col xs="12" className="mb-3">
          <Label for="searchQuery">
            Input the name of whom you wish to find:
          </Label>
          <Input
            type="text"
            placeholder="Search for Survivor's name..."
            id="searchQuery"
            name="searchQuery"
            value={searchQuery}
            onChange={handleChange}
          ></Input>
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
            <PersonTable key={index} index={index} person={person} />
          ))}
        </Table>
      </Row>
    </>
  );
}

export default People;
