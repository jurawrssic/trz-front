import React, { Component } from "react";
import Person from "./components/Person";
import Register from "./components/Register";
import Trade from "./components/Trade";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="homepage">
          <Row>
            <Col xs="6">
              <h4>Zombie Resident</h4>
              <Nav vertical pills>
                <NavItem>
                  <NavLink href="#">Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Update Location</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Trade</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Report</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Registered</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col xs="6">
              <Trade />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
