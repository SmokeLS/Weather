import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import SideMenu from './SideMenu/SideMenu';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { actions, setCurrentWeatherLatLon, setForecastLatLon } from '../../redux/app-reducer';
import { useEffect, useState } from 'react';
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

const Map = () => {
  const dispatch = useDispatch();
  const maps = useSelector((state: AppStateType) => state.app.maps);
  const currentWeather = useSelector((state: AppStateType) => state.app.currentWeather);
  const tempUnit = useSelector((state: AppStateType) => state.app.tempUnit);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

  const position = React.useMemo(() => [selectedPosition[0] ? selectedPosition[0] : initialPosition[0],
                    selectedPosition[1] ? selectedPosition[1] : initialPosition[1]], [selectedPosition, initialPosition]);

  const bounds = [
    [
      [-90, -190],
      [90, 210],
    ],
  ];

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords;
  //     setInitialPosition([latitude, longitude]);
  //   });
  // }, []);

  useEffect(() => {
    const [latitude, longitude] = [position[0], position[1]]
    dispatch(setCurrentWeatherLatLon(latitude, longitude));
    dispatch(setForecastLatLon(latitude,longitude));
  }, [position, dispatch]);

  useEffect(() => {
    if (!currentWeather) return;

    if (currentWeather.coord.lat !== selectedPosition[0] && currentWeather.coord.lon !== selectedPosition[1]) {
      setSelectedPosition([currentWeather.coord.lat, currentWeather.coord.lon]);
    }
  }, [currentWeather, selectedPosition]);

  if (!currentWeather) return <div></div>;

  const Markers = () => {
    const map = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return selectedPosition[0] && selectedPosition[1] ? (
      <Marker
        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
        position={selectedPosition}
      >
        <Popup>
          {currentWeather.name}, {convertedTemp} <br /> latitude : {selectedPosition[0]}
          <br /> longitude : {selectedPosition[1]}.
        </Popup>
      </Marker>
    ) : (
      <Marker
        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
        position={initialPosition}
      >
        <Popup>
          {currentWeather.name}, {convertedTemp} <br /> latitude : {initialPosition[0]}
          <br /> longitude : {initialPosition[1]}.
        </Popup>
      </Marker>
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

  console.log(position);

  const convertedTemp =
    tempUnit === '°C' ? `${toCelsius(currentWeather.main.temp)}°C` : `${toFahrenheit(currentWeather.main.temp)}°F`;

  return (
    <>
      {/* @ts-ignore */}
      <MapContainer center={position} style={MapContainerStyle} maxBounds={bounds}
        zoomControl={false}
        setView={position}
        zoom={10}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {DisplayMaps}
        <SideMenu ChangeMaps={ChangeMaps} />
        {/* @ts-ignore */}
        <Markers />
        <RecenterAutomatically lat={position[0]} lng={position[1]} />
      </MapContainer>
    </>
  );
};

export default Map;
