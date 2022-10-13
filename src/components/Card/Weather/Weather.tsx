import React, { useEffect } from 'react';
import styled from 'styled-components';
import rainy from '../../../assets/rainy.png';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux-store';
import { setCurrentWeather } from '../../../redux/app-reducer';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  font-size: 32px;
  color: #fff;
`;

const Img = styled.img.attrs(({ src }) => ({
  alt: 'rainy',
  src,
}))`
  width: 140px;
  align-self: flex-start;
  margin-right: 20px;
`;

type PropsType = {};

const Weather: React.FC<PropsType> = ({}) => {
  const dispatch = useDispatch();
  const currentWeather = useSelector((state: AppStateType) => state.app.currentWeather);

  useEffect(() => {
    dispatch(setCurrentWeather('Moscow'));
  }, [dispatch]);

  if (!currentWeather) {
    return <div></div>;
  }

  const colPressure = Math.round(currentWeather?.main.pressure * 0.750064);

  return (
    <Wrapper>
      <Img src={rainy} />
      <TextWrapper>
        <div>{currentWeather.name}</div>
        <div>Давление: {colPressure} мм.</div>
        <div>Влажность: {currentWeather.main.humidity}%</div>
      </TextWrapper>
    </Wrapper>
  );
};

export default Weather;
