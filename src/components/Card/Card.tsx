import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCurrentWeather, setForecast } from '../../redux/app-reducer';
import rainy from '../../assets/rainy.png';

import Forecast from './SliderForecast/Forecast/Forecast';
import SliderForecast from './SliderForecast/SliderForecast';
import Weather from './Weather/Weather';
import Temperature from './Temperature/Temperature';
import { weatherAPI } from '../../api/api';
import { AppStateType } from '../../redux/redux-store';
import { ForecastType } from '../../types/types';

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
  border-bottom: 4px solid rgba(60, 60, 60, 0.4);
  flex-direction: row;
`;

const Wrapper = styled.div`
  width: 16.7%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  text-align: center;
`;

const TextWrapper = styled.div`
  font-size: 32px;
`;

const ImgWrapper = styled.div`
  font-size: 24px;
  color: #81fcfc;
  text-align: center;
`;

const Img = styled.img.attrs(({ src }) => ({
  alt: 'rainy',
  src,
}))`
  width: 100px;
`;

const SliderProps = {
  zoomFactor: 5,
  slideMargin: 50,
  maxVisibleSlides: 2,
  pageTransition: 500,
};

type PropsType = {};

const Card: React.FC<PropsType> = () => {
  const dispatch = useDispatch();
  const forecast = useSelector((state: AppStateType) => state.app.forecast);

  const [data, setData] = useState<ForecastType>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeForecast, setActiveForecast] = useState<ForecastType>();

  const handleOpenDialog = (forecast: ForecastType) => {
    setIsDialogOpen(true);
    setActiveForecast(forecast);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await weatherAPI.getForecast('Moscow');
      setData(data);
    };

    getData();
  }, []);

  useEffect(() => {
    dispatch(setForecast('Moscow'));
  }, [dispatch]);

  console.log(data);
  console.log(forecast);

  if (!forecast) {
    return <div></div>;
  }

  return (
    <>
      {/* <Dialog onClose={() => setIsDialogOpen(false)} open={isDialogOpen} /> */}
      <CardWrapper>
        <UpperSection>
          <Weather />
          <Temperature />
        </UpperSection>
        <SliderForecast {...SliderProps}>
          {forecast.list.map((item, index) => {
            return <div key={index} onClick={() => handleOpenDialog(forecast)}>
              <TextWrapper>
                <div>27.10.2012</div>
                <div>18:23</div>
              </TextWrapper>
              <ImgWrapper>
                <div>70%</div>
                <Img src={rainy}/>
              </ImgWrapper>
              <TextWrapper>27°C</TextWrapper>
            </div>;
          })}
        </SliderForecast>
      </CardWrapper>
    </>
  );
};

export default Card;
