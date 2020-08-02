import React from "react";
import { Route } from "react-router-dom";

import Informations from "./Informations";
import Register from "./Register";
import UpdateLocation from "./UpdateLocation";
import Trade from "./Trade";
import RegisteredPeople from "./RegisteredPeople";

function NavigationRoutes() {
  return (
    <>
      <Route exact path="/" component={Informations}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/updateLocation" component={UpdateLocation}></Route>
      <Route path="/trade" component={Trade}></Route>
      <Route path="/reportInfected" component={RegisteredPeople}></Route>
    </>
  );
}

export default NavigationRoutes;
