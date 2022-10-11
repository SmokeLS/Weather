import React from 'react';
import styled from 'styled-components';
import Forecast from './Forecast/Forecast';
import Weather from './Weather/Weather';
import Temperature from './Temperature/Temperature';

const CardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 600px;
  width: 80%;
  border-radius: 15px;
  padding: 25px;
  padding-top: 50px;
  margin: auto;
`;

const UpperSection = styled.div`
  display: flex;
  height: 40%;
  border-bottom: 4px solid rgba(60,60,60,0.4);
  flex-direction: row;
`;

const BottomSection = styled.div`
  height: 60%;
  display: flex;
  flex-direction: row;
`;

function Card() {
  return (
    <CardWrapper>
      <UpperSection>
        <Weather />
        <Temperature />
      </UpperSection>
      <BottomSection>
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </BottomSection>
    </CardWrapper>
  );
}

export default Card;
