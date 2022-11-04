import React from 'react';
import styled from 'styled-components';
import rain from '../assets/rain.jpg'
import Card from '../components/Card/Card';

const ImgWrapper = styled.div`
  background-image: url(${rain});
  width: 100%;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ImgWrapper className='Application'>
      {/* <Panel /> */}
      <Card />
    </ImgWrapper>
  );
}

export default App;
