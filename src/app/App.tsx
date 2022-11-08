import React from 'react';
import styled from 'styled-components';
import rain from '../assets/rain.jpg';
import Card from '../components/Card/Card';
import Panel from '../components/Panel/Panel';
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
        <MainPage>
          <ErrorBoundary>
            <Card />
          </ErrorBoundary>
        </MainPage>
      </Wrapper>
    </>
  );
}

export default App;
