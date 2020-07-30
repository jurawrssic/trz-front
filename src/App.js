import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Person from "./components/Person";
import People from "./components/People";
import Register from "./components/Register";
import UpdateLocation from "./components/UpdateLocation";
import Trade from "./components/Trade";
import Report from "./components/Report";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <div className="App">
            <Container className="homepage">
              <Row>
                <Col xs="4">
                  <h4>Zombie Resident</h4>
                  <Nav vertical pills>
                    <NavItem className="mt-2">
                      <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem className="mt-2">
                      <Link to="/register">Register</Link>
                    </NavItem>
                    <NavItem className="mt-2">
                      <Link to="/updateLocation">Update Location</Link>
                    </NavItem>
                    <NavItem className="mt-2">
                      <Link to="/trade">Trade</Link>
                    </NavItem>
                    <NavItem className="mt-2">
                      <Link to="/reportInfected">Report</Link>
                    </NavItem>
                    <NavItem className="mt-2">
                      <Link to="/listRegisteredPeople">Registered</Link>
                    </NavItem>
                  </Nav>
                </Col>
                <Col xs="8" id="views">
                  <Route path="/register" component={Register}></Route>
                  <Route
                    path="/updateLocation"
                    component={UpdateLocation}
                  ></Route>
                  <Route path="/trade" component={Trade}></Route>
                  <Route path="/reportInfected" component={Report}></Route>
                  <Route
                    path="/listRegisteredPeople"
                    component={People}
                  ></Route>
                </Col>
              </Row>
            </Container>
          </div>
        </Route>
      </Router>
    );
  }
}

export default App;
