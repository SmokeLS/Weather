import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import SideMenu from './SideMenu/SideMenu';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { actions, setCurrentWeatherLatLon, setForecastLatLon } from '../../redux/app-reducer';
import { useEffect } from 'react';
import { toCelsius, toFahrenheit } from '../../common/convert';

type AutoType = {
  lat: number;
  lng: number;
};

const RecenterAutomatically: React.FC<AutoType> = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);

  return null;
};

type PropsType = {
  currentLocation: [number, number];
  setCurrentLocation: Function;
};

const Map: React.FC<PropsType> = ({ currentLocation, setCurrentLocation }) => {
  const dispatch = useDispatch();
  const maps = useSelector((state: AppStateType) => state.app.maps);
  const currentWeather = useSelector((state: AppStateType) => state.app.currentWeather);
  const tempUnit = useSelector((state: AppStateType) => state.app.tempUnit);

  const bounds = [
    [
      [-90, -190],
      [90, 210],
    ],
  ];

  useEffect(() => {
    if (!currentWeather) return;

    setCurrentLocation([currentWeather.coord.lat, currentWeather.coord.lon]);
  }, [currentWeather, setCurrentLocation]);

  useEffect(() => {
    if (!currentWeather) return;

    return () => {
      setCurrentLocation([currentWeather.coord.lat, currentWeather.coord.lon]);
    };
  }, []);

  if (!currentWeather) return <div></div>;

  const Markers = () => {
    useMapEvents({
      click(e) {
        if (e.originalEvent.target === e.originalEvent.currentTarget) {
          dispatch(setCurrentWeatherLatLon(e.latlng.lat, e.latlng.lng));
          dispatch(setForecastLatLon(e.latlng.lat, e.latlng.lng));
          setCurrentLocation([e.latlng.lat, e.latlng.lng]);
        }
      },
    });

    return (
      currentLocation[0] &&
      currentLocation[1] && (
        <Marker
          icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
          position={currentLocation}
        >
          <Popup>
            {currentWeather.name || 'Unknown'}, {convertedTemp} <br /> latitude : {currentLocation[0]}
            <br /> longitude : {currentLocation[1]}.
          </Popup>
        </Marker>
      )
    );
  };

  const ChangeMaps = (maps: Array<string>) => {
    dispatch(actions.setMaps(maps));
  };

  const MapContainerStyle = {
    height: '100vh',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    marginTop: -86,
  };

  const DisplayMaps = maps.map((item) => {
    return (
      <TileLayer
        key={item}
        detectRetina
        url={`https://{s}.tile.openweathermap.org/map/${item}/{z}/{x}/{y}.png?appid=82cd9c64b0e678fe5ce342593e19f7de`}
      />
    );
  });

  const convertedTemp =
    tempUnit === '°C' ? `${toCelsius(currentWeather.main.temp)}°C` : `${toFahrenheit(currentWeather.main.temp)}°F`;

  return (
    <>
      {/* @ts-ignore */}
      <MapContainer center={currentLocation} style={MapContainerStyle} maxBounds={bounds}
        zoomControl={false}
        setView={currentLocation}
        zoom={10}
        doubleClickZoom={false}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {DisplayMaps}
        <SideMenu ChangeMaps={ChangeMaps} />
        {/* @ts-ignore */}
        <Markers />
        <RecenterAutomatically lat={currentLocation[0]} lng={currentLocation[1]} />
      </MapContainer>
    </>
  );
};

export default Map;
