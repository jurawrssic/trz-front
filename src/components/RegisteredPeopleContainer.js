import React from 'react';
import { Row, Label } from "reactstrap";

import RegisteredPeople from "./RegisteredPeople"

function RegisteredPeopleContainer() {
    return (
        <>
            <h4>Registered People</h4>
            <Row className="justify=content-center border-top pt-4">
                <Label for="searchQuery" className="pl-3">
                    Input the name of whom you wish to find:
                </Label>
                <RegisteredPeople />
            </Row>
        </>
    )
}

export default RegisteredPeopleContainer;