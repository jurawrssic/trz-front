import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";

function Person() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const url = "http://zssn-backend-example.herokuapp.com/api/people.json";

    axios.get(url).then((response) => setPeople(response.data));
  }, []);

  return (
    <Table hover borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Location</th>
        </tr>
      </thead>
      {people.map((person, index) => (
        <>
          <tbody>
            <tr key={index + 1}>
              <th scope="row">{index + 1}</th>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.gender}</td>
              <td>{person.lonlat}</td>
            </tr>
          </tbody>
        </>
      ))}
    </Table>
  );
}

export default Person;
