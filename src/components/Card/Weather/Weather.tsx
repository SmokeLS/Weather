import React, { useEffect } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { setCurrentWeather } from '../../../redux/app-reducer';
import ExchangePicture from '../../../common/exchangePicture/exchangePicture';
import { colPressure } from '../../../common/convert';

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const WrapperMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  margin-right: 20px;
  align-self: flex-start;
`;

const ImgMobile = styled.img.attrs(({ src }) => ({
  alt: 'rainy',
  src,
}))`
  width: 140px;
  margin: 0 auto;
  align-self: flex-start;
`;

type PropsType = {};

const Weather: React.FC<PropsType> = () => {
  const dispatch = useDispatch();
  const currentWeather = useSelector((state: AppStateType) => state.app.currentWeather);

  useEffect(() => {
    dispatch(setCurrentWeather('Moscow'));
  }, [dispatch]);

  if (!currentWeather) {
    return <div></div>;
  }

  return (
    <>
      <MediaQuery minWidth={769}>
        <Wrapper>
          <Img src={ExchangePicture(currentWeather.weather[0].icon)} />
          <TextWrapper>
            <div>{currentWeather.name}</div>
            <div>
              Давление: <span style={{ whiteSpace: 'nowrap' }}>{colPressure(currentWeather.main.pressure)} мм.</span>
            </div>
            <div>Влажность: {currentWeather.main.humidity}%</div>
          </TextWrapper>
        </Wrapper>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <WrapperMobile>
          <ImgMobile src={ExchangePicture(currentWeather.weather[0].icon)} />
          <TextWrapper>
            <div>{currentWeather.name}</div>
            <div>
              Давление: <span style={{ whiteSpace: 'nowrap' }}>{colPressure(currentWeather.main.pressure)} мм.</span>
            </div>
            <div>Влажность: {currentWeather.main.humidity}%</div>
          </TextWrapper>
        </WrapperMobile>
      </MediaQuery>
    </>
  );
};

export default Weather;
