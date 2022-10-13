import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCurrentWeather, setForecast } from '../../redux/app-reducer';

import Forecast from './Forecast/Forecast';
import Weather from './Weather/Weather';
import Temperature from './Temperature/Temperature';
import { weatherAPI } from '../../api/api';
import { AppStateType } from '../../redux/redux-store';

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

type PropsType = {};

const Card: React.FC<PropsType> = () => {

  const dispatch = useDispatch();
  const forecast = useSelector((state: AppStateType) => state.app.forecast);

  useEffect(() => {
      dispatch(setForecast("Moscow"));
  },[dispatch])

  console.log(forecast);

  return (
    <CardWrapper>
      <UpperSection>
        <Weather/>
        <Temperature />
      </UpperSection>
      <BottomSection>
          <Forecast/>
          <Forecast/>
          <Forecast/>
          <Forecast/>
          <Forecast/>
          <Forecast/>
      </BottomSection>
    </CardWrapper>
  );
}

export default Card;
