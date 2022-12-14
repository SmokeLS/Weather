import React from 'react';
import styled from 'styled-components';
import { AppStateType } from '../../../redux/redux-store';
import { useSelector } from 'react-redux';
import { daysRu } from '../../../common/dates';
import { toCelsius, toFahrenheit } from '../../../common/convert';
import { useMediaQuery } from '@mui/material';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const WrapperMobile = styled.div`
  width: 100%;
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
  text-align: center;
`;

type PropsType = {};

const Temperature: React.FC<PropsType> = () => {
  const currentWeather = useSelector((state: AppStateType) => state.app.currentWeather);
  const tempUnit = useSelector((state: AppStateType) => state.app.tempUnit);
  const isMobile = useMediaQuery('(min-width:769px)');

  const weatherDate = new Date();

  const zeroDate = weatherDate.getDate() < 10 ? `0${weatherDate.getDate()}` : weatherDate.getDate();
  const zeroMonth = weatherDate.getMonth() + 1 < 10 ? `0${weatherDate.getMonth() + 1}` : weatherDate.getMonth() + 1;

  const weatherDateFormat = `${zeroDate}/${zeroMonth}`;

  if (!currentWeather) {
    return <div></div>;
  }

  const convertedTemp =
    tempUnit === '°C' ? `${toCelsius(currentWeather.main.temp)}°C` : `${toFahrenheit(currentWeather.main.temp)}°F`;

  const Wrap = isMobile ? Wrapper : WrapperMobile;
  return (
    <Wrap>
      <TextTemperatureWrapper>{convertedTemp}</TextTemperatureWrapper>
      <TextDateWrapper>
        {weatherDateFormat} {daysRu[weatherDate.getDay()]}
      </TextDateWrapper>
    </Wrap>
  );
};

export default Temperature;
