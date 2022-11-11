import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [51.505, -0.09];

  const MapContainerStyle = {
    height: 'calc(100vh - 66px)',
    width: '100%',
    position: 'relative',
    top: 0,
    left:0,
    marginTop: -20,
  }
  
  return (
    <>
      {/* @ts-ignore */}
      <MapContainer center={position} zoom={2} scrollWheelZoom={false} style={MapContainerStyle}>
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/1/1/1.png"
        /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* @ts-ignore */}
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
