import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import exchangePicture from '../../../common/exchangePictures';
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
  const currentWeather = useSelector((state: AppStateType) => state.app.currentWeather);

  if (!currentWeather) {
    return <div></div>;
  }

  return (
    <>
      <MediaQuery minWidth={768}>
        <Wrapper>
          <Img src={exchangePicture(currentWeather.weather[0].icon).src} alt={exchangePicture(currentWeather.weather[0].icon).alt}/>
          <TextWrapper>
            <div>{currentWeather.name}</div>
            <div>
              Давление: <span style={{ whiteSpace: 'nowrap' }}>{colPressure(currentWeather.main.pressure)} мм.</span>
            </div>
            <div>Влажность: {currentWeather.main.humidity}%</div>
            {/* <div>{currentWeather.coord.lat} {currentWeather.coord.lon}</div> */}
          </TextWrapper>
        </Wrapper>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <WrapperMobile>
          <ImgMobile src={exchangePicture(currentWeather.weather[0].icon).src} alt={exchangePicture(currentWeather.weather[0].icon).alt}/>
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
