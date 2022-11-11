import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import rain from '../assets/rain.jpg';
import Card from '../components/Card/Card';
import Panel from '../components/Panel/Panel';
import Map from '../components/Map/Map';
import ErrorBoundary from '../common/ErrorBoundary/ErrorBoundary';

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
            path='/map'
            element={
              <Map />
            }
          />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
