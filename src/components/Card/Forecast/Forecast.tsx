import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import rainy from '../../../assets/rainy-day.png';
import { toCelsius } from '../../../common/convert';
import exchangePicture from '../../../common/exchangePicture/exchangePicture';
import { setForecast } from '../../../redux/app-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { ListType } from '../../../types/types';

const TextWrapper = styled.div`
  font-size: 32px;
`;

const ImgWrapper = styled.div`
  font-size: 24px;
  color: #81fcfc;
  text-align: center;
  div {
    margin-bottom: 10px;
  }
`;

const Img = styled.img.attrs(({ src }) => ({
  alt: 'rainy',
  src,
}))`
  width: 100px;
`;

type PropsType = {
  item: ListType;
  index: number;
  handleOpenDialog: any;
};

const Forecast: React.FC<PropsType> = ({ item, index, handleOpenDialog }) => {
  const dateYYYYMMDD = item.dt_txt.split(' ')[0];
  const dateHHMM = `${item.dt_txt.split(' ')[1].split(':')[0]}:${item.dt_txt.split(' ')[1].split(':')[1]}`;

  return (
    <div onClick={handleOpenDialog} key={index}>
      <TextWrapper>
        <div>{dateYYYYMMDD}</div>
        <div>{dateHHMM}</div>
      </TextWrapper>
      <ImgWrapper>
        <div>{item.main.humidity}%</div>
        <Img src={exchangePicture(item.weather[0].icon)} />
      </ImgWrapper>
      <TextWrapper>{toCelsius(item.main.temp)}°C</TextWrapper>
    </div>
  );
};

export default Forecast;