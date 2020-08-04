import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Navigation from "./components/Navigation";
import NavigationRoutes from "./components/NavigationRoutes";

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
                  <Navigation />
                </Col>
                <Col xs="8" id="views">
                  <NavigationRoutes />
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

