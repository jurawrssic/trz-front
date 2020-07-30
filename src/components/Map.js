import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { render } from "@testing-library/react";

function MapContainer() {
  return (
    <Map
      google={this.props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  );

  const mapStyles = {
    width: "100%",
    height: "100%",
  };
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAksAD4fzPuTTHSvzpB4jqaMgFSszSZlk4",
})(MapContainer);
