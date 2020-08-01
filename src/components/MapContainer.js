import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapContainer({ onMarkerChange }) {
  const mapStyles = {
    minWidth: "35rem",
    minHeight: "20rem",
  };

  const [lat, setLat] = useState(47.444);
  const [lng, setLng] = useState(-122.176);

  const setMarker = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    setLat(lat);
    setLng(lng);

    var string = "POINT (" + lng + " " + lat + ")";

    onMarkerChange(string);
  };

  return (
    <div id="divMap" className="container mt-4" style={mapStyles}>
      <Map
        google={window.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
        onClick={setMarker}
      >
        <Marker position={{ lat, lng }} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAksAD4fzPuTTHSvzpB4jqaMgFSszSZlk4",
})(MapContainer);
