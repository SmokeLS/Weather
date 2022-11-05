import React from 'react';
import styled from 'styled-components';
import rain from '../assets/rain.jpg';
import Card from '../components/Card/Card';
import Panel from '../components/Panel/Panel';
import ErrorBoundary from '../common/ErrorBoundary/ErrorBoundary';

const ImgWrapper = styled.div`
  background-image: url(${rain});
  width: 100%;
  background-size: cover;
  height: 100vh;
`;

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <ImgWrapper className="Application">
        <Panel />
        <MainPage>
          <ErrorBoundary>
            <Card />
          </ErrorBoundary>
        </MainPage>
      </ImgWrapper>
    </>
  );
}

export default App;
