import React from "react";
import { Route } from "react-router-dom";

import RegisteredPeople from "./RegisteredPeople";
import Register from "./Register";
import UpdateLocation from "./UpdateLocation";
import Trade from "./Trade";

function NavigationRoutes() {
  return (
    <>
      <Route path="/register" component={Register}></Route>
      <Route path="/updateLocation" component={UpdateLocation}></Route>
      <Route path="/trade" component={Trade}></Route>
      <Route path="/reportInfected" component={RegisteredPeople}></Route>
    </>
  );
}

export default NavigationRoutes;
