import React, { useState, useEffect } from "react";
import { Table, Input } from "reactstrap";
import axios from "axios";
import ReportInfectedModal from "./ReportInfectedModal";

function PersonTable({ person, index }) {
  // Change style from in line, and disable button when infected
  person.id = person.location.split("/")[5];

  return (
    <>
      <tbody>
        <tr
          key={index + 1}
          style={{
            textDecoration: person.infected ? "line-through" : "none",
            color: person.infected ? "rgb(100, 0, 0)" : "#fff",
          }}
        >
          <th scope="row">{index + 1}</th>
          <td>{person.name}</td>
          <td>{person.gender}</td>
          <td>{person.age}</td>
          <td>{person.lonlat}</td>
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
  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    const url = "http://zssn-backend-example.herokuapp.com/api/people.json";

    axios.get(url).then((response) => setPeople(response.data));
  }, []);

  // Filter only filters once, wtf??? Check this later
  const onSearch = (e) => {
    setSearchedValue(e.target.value);
    setPeople(people.filter((person) => person.name.includes(searchedValue)));
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Search for Survivor's name..."
        onChange={onSearch}
        value={searchedValue}
      ></Input>

      <Table hover borderless className="text-center text-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Location</th>
          </tr>
        </thead>
        {people.map((person, index) => (
          <PersonTable key={index} index={index} person={person} />
        ))}
      </Table>
    </>
  );
}

export default People;
