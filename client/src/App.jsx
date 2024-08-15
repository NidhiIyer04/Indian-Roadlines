import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Alert, Spinner } from "react-bootstrap";
import "./App.css";
import health from "./assets/road.png";


const fetcher = (url) => axios.get(url).then((res) => res.data);

export const myIcon = new Icon({
  iconUrl: road,
  iconSize: [30, 38],
  iconAnchor: [20, 90],
  shadowAnchor: [5, 64],
  popupAnchor: [-4, -79],
});

function App() {
  const [activeRoad, setActiveRoad] = useState(null);
  const position = [0.099, 38.000];
  const zoom = 7;
  const { data, error } = useSWR("http://localhost:8000/api/v1/indianroadlines", fetcher);
  const facilities = data && !error ? data : {};

  if (error) {
    return <Alert variant="danger">Ohh No! We have a problem!</Alert>;
  }
  if (!data) {
    return (
      <Spinner
        animation="border"
        variant="danger"
        role="status"
        style={{
          width: "300px",
          height: "300px",
          margin: "auto",
          display: "block",
        }}
      />
    );
  }

  return (
    <>
    <h1>Indian Roadlines Map</h1>
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {roads.features.map((facility, key) => (
            <Marker
               key={key}
               position={[
                road.geometry.coordinates[0][1],
                road.geometry.coordinates[0][0],
               ]}
               onClick={() => {
                  setActiveRoad(road);
               }}
               icon={myIcon}
            >
               <Popup
                  position={[
                    road.geometry.coordinates[0][1],
                    road.geometry.coordinates[0][0],
                  ]}
                  onClose={() => {
                     setActiveRoad(null);
                  }}
               >
                  <div>
                     <h6>{Road.properties.name}</h6>
                     <p>{Road.properties.lanes}</p>
                  </div>
               </Popup>
            </Marker>
         ))}
      </MapContainer>
    </>
  );
}

export default App;
