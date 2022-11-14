import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import SideMenu from './SideMenu/SideMenu';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { actions } from '../../redux/app-reducer';

const Map = () => {
  const dispatch = useDispatch();
  const maps = useSelector((state: AppStateType) => state.app.maps);
  const position = [51.505, -0.09];
  const bounds = [
    [
      [-90, -Infinity],
      [90, Infinity],
    ],
  ];

  useEffect(() => {
    dispatch(actions.setMaps(['temp_new']));
  }, [dispatch]);

  const ChangeMaps = (maps: Array<string>) => {
    console.log(maps);
    dispatch(actions.setMaps(maps))
  }

  const MapContainerStyle = {
    height: 'calc(100vh - 66px)',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    marginTop: -20,
  };

  const DisplayMaps = maps.map((item, index) => {

    console.log(item);
    return (
      <TileLayer
      key={item}
      detectRetina
      url={`https://{s}.tile.openweathermap.org/map/${item}/{z}/{x}/{y}.png?appid=82cd9c64b0e678fe5ce342593e19f7de`}
    />
    )
  });

  return (
    <>
      {/* @ts-ignore */}
      <MapContainer center={position} style={MapContainerStyle} maxBounds={bounds}
        zoom={3}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {DisplayMaps}
        <SideMenu ChangeMaps={ChangeMaps}/>
        {/* @ts-ignore */}
        <Marker icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
