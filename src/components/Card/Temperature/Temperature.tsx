import React, { useEffect } from 'react';
import styled from 'styled-components';
import { setCurrentWeather } from '../../../redux/app-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';

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

  useEffect(() => {
    dispatch(setCurrentWeather('Moscow'));
  }, [dispatch]);

  if (!currentWeather) {
    return <div></div>;
  }

  const celsiusTemp = Math.round(currentWeather.main.temp - 273.15);

  return (
    <Wrapper>
      <TextTemperatureWrapper>{celsiusTemp}°C</TextTemperatureWrapper>
      <TextDateWrapper>05/18 Четверг</TextDateWrapper>
    </Wrapper>
  );
};

export default Temperature;
