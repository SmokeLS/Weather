import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import rain from '../assets/rain.jpg';
import Card from '../components/Card/Card';
import Panel from '../components/Panel/Panel';
import Map from '../components/Map/Map';
import ErrorBoundary from '../common/ErrorBoundary/ErrorBoundary';
import { useDispatch } from 'react-redux';
import { actions, setCurrentWeatherLatLon, setForecastLatLon } from '../redux/app-reducer';

const ImgBackground = styled.div`
  background-image: url(${rain});
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -1;
  position: fixed;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState([0, 0]);

  useEffect(() => {
 
    if (window.sessionStorage.getItem('latitude') && window.sessionStorage.getItem('longitude')) {
      const latitude = parseFloat(window.sessionStorage.getItem('latitude') ?? "");
      const longitude = parseFloat(window.sessionStorage.getItem('longitude') ?? "");

      setCurrentLocation([latitude, longitude]);

      dispatch(actions.setIsLoading(true));
      dispatch(setCurrentWeatherLatLon(latitude, longitude));
      dispatch(setForecastLatLon(latitude, longitude));
      dispatch(actions.setIsLoading(false));
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setCurrentLocation([latitude, longitude]);

      dispatch(actions.setIsLoading(true));
      dispatch(setCurrentWeatherLatLon(latitude, longitude));
      dispatch(setForecastLatLon(latitude, longitude));
      dispatch(actions.setIsLoading(false));
    });
    

  }, [dispatch]);

  return (
    <>
      <ImgBackground />
      <Wrapper className="Application">
        <Panel />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage>
                <ErrorBoundary>
                  <Card />
                </ErrorBoundary>
              </MainPage>
            }
          ></Route>
          <Route
            path="/map"
            element={
              <Map currentLocation={currentLocation as [number, number]} setCurrentLocation={setCurrentLocation} />
            }
          />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
