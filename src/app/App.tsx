import React from 'react';
import styled from 'styled-components';
import rain from '../assets/rain.jpg';
import Card from '../components/Card/Card';
import Panel from '../components/Panel/Panel';
import ErrorBoundary from '../common/ErrorBoundary/ErrorBoundary';
import MediaQuery from 'react-responsive';

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

const ImgWrapperMobile = styled.div`
  background-image: url(${rain});
  width: 100%;
  background-size: cover;
  height: 100vh;
`;

const MainPageMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <MediaQuery minWidth={768}>
        <ImgWrapper className="Application">
          <Panel />
          <MainPage>
            <ErrorBoundary>
              <Card />
            </ErrorBoundary>
          </MainPage>
        </ImgWrapper>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <ImgWrapper>
        <Panel />
          <MainPageMobile>
            <ErrorBoundary>
              <Card />
            </ErrorBoundary>
          </MainPageMobile>
        </ImgWrapper>
      </MediaQuery>
    </>
  );
}

export default App;
