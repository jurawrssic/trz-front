import React, { useState, useEffect } from "react";
import axios from "axios";

function Person() {
  const [people, setPerson] = useState([]);

  useEffect((props) => {
    const url =
      "http://zssn-backend-example.herokuapp.com/api/people/" +
      "94b142dc-a950-4e63-8dcf-19568481b8ac" +
      ".json";

    axios.get(url).then((response) => setPerson(response.data));
  }, []);

  return <div>{people.map((person, index))}</div>;
}

export default Person;
