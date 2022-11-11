import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [51.505, -0.09];
  const bounds = [
    [
      [-90, -Infinity],
      [90, Infinity],
    ],
  ];

  const MapContainerStyle = {
    height: 'calc(100vh - 66px)',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    marginTop: -20,
  };

  return (
    <>
      {/* @ts-ignore */}
      <MapContainer center={position} zoom={2} style={MapContainerStyle} maxBounds={bounds}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <TileLayer
          detectRetina
          url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=82cd9c64b0e678fe5ce342593e19f7de"
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
