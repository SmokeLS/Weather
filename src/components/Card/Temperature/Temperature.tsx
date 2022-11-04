import React, { useEffect } from 'react';
import styled from 'styled-components';
import { setCurrentWeather } from '../../../redux/app-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import { daysRu } from '../../../common/dates';
import { toCelsius, toFahrenheit } from '../../../common/convert';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const TextTemperatureWrapper = styled.div`
  font-size: 80px;
  line-height: 86px;
`;

const TextDateWrapper = styled.div`
  font-size: 32px;
`;

type PropsType = {};

const Temperature: React.FC<PropsType> = () => {
  const dispatch = useDispatch();
  const currentWeather = useSelector((state: AppStateType) => state.app.currentWeather);
  const tempUnit = useSelector((state: AppStateType) => state.app.tempUnit);
  
  const weatherDate = new Date();
  
  
  const zeroDate = weatherDate.getDate() < 10 ? `0${weatherDate.getDate()}` : weatherDate.getDate();
  const zeroMonth = weatherDate.getMonth() + 1 < 10 ? `0${weatherDate.getMonth()+1}` : weatherDate.getMonth()+1;
  
  const weatherDateFormat = `${zeroDate}/${zeroMonth}`
  
  useEffect(() => {
    dispatch(setCurrentWeather('Moscow'));
  }, [dispatch]);
  
  if (!currentWeather) {
    return <div></div>;
  }
  
  const convertedTemp = tempUnit === "°C" ? `${toCelsius(currentWeather.main.temp)}°C` : `${toFahrenheit(currentWeather.main.temp)}°F`;
  
  return (
    <Wrapper>
      <TextTemperatureWrapper>{convertedTemp}</TextTemperatureWrapper>
      <TextDateWrapper>{weatherDateFormat} {daysRu[weatherDate.getDay()]}</TextDateWrapper>
    </Wrapper>
  );
};

export default Temperature;
