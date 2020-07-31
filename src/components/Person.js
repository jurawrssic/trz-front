import React, { useState, useEffect } from "react";
import axios from "axios";

function Person() {
  const [person, setPerson] = useState({
    id: null,
    name: null,
    age: null,
    gender: null,
    latlon: null,
    infected: null,
    //id: response.data.id,
    //name: response.data.name,
    //age: response.data.age,
    //gender: response.data.gender,
    //latlon: response.data.latlon,
    //infected: response.data.infected,
  });

  useEffect((props) => {
    const url =
      "http://zssn-backend-example.herokuapp.com/api/people/" +
      "94b142dc-a950-4e63-8dcf-19568481b8ac" +
      ".json";

    axios.get(url).then((response) => setPerson(response.data));
  }, []);

  return (
    <div>
      <p>{this.state.person.name}</p>
    </div>
  );
}

export default Person;
