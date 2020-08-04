import React from "react";
import { Button } from "reactstrap";

import ReportInfectedModal from "./ReportInfectedModal";
import female from "./../assets/female.png";
import male from "./../assets/male.png";
import dead from "./../assets/infected.png";

function PersonTable({ person, index, screenLocation, onSelectPerson, setAlert }) {
    const tableStyle = {
        textDecoration: person.infected ? "line-through" : "none",
        color: person.infected ? "rgb(100, 0, 0)" : "#fff",
    };

    const getGender = () => {
        return <img className="gender-icons" src={person.infected ? dead : (person.gender === "F" ? female : male)} alt="Gender" />
    };

    const getButton = (person, index) => {
        if (screenLocation === "outsideReportComponent") {
            return <Button onClick={(e) => { onSelect(person) }} id={person.name}>SELECT!</Button>
        } else {
            return <ReportInfectedModal name={person.name} location={person.location} setAlert={setAlert} />;
        }
    }
    const onSelect = (person) => {
        onSelectPerson(person);
    }

    return (
        <>
            <tbody>
                <tr key={index + 1} style={tableStyle}>
                    <th scope="row" width="15%">{getGender()}</th>
                    <td className="pt-3" width="25%">{person.name}</td>
                    <td className="pt-3" width="10%">{person.age}</td>
                    <td className="pt-3" with="50%">{person.lonlat}</td>
                    <td>
                        {getButton(person, index)}
                    </td>
                </tr>
            </tbody>
        </>
    );
}

export default PersonTable;