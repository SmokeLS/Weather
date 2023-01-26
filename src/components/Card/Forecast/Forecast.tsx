import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { toCelsius, toFahrenheit } from '../../../common/convert';
import exchangePictures from '../../../common/exchangePictures';
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

const Img = styled.img.attrs(({ src, alt }) => ({
  alt,
  src,
}))`
  width: 100px;
`;

type PropsType = {
  item: ListType;
  index: number;
  handleOpenDialog: () => void;
};

const Forecast: React.FC<PropsType> = ({ item, index, handleOpenDialog }) => {
  const dateYYYYMMDD = item.dt_txt.split(' ')[0];
  const dateHHMM = `${item.dt_txt.split(' ')[1].split(':')[0]}:${item.dt_txt.split(' ')[1].split(':')[1]}`;

  const tempUnit = useSelector((state: AppStateType) => state.app.tempUnit);
  const convertedTemp = tempUnit === '°C' ? `${toCelsius(item.main.temp)}°C` : `${toFahrenheit(item.main.temp)}°F`;

  return (
    <div onClick={handleOpenDialog} key={index}>
      <TextWrapper>
        <div style={{ whiteSpace: 'pre-wrap' }}>{dateYYYYMMDD}</div>
        <div>{dateHHMM}</div>
      </TextWrapper>
      <ImgWrapper>
        <div>{item.main.humidity}%</div>
        <Img src={exchangePictures(item.weather[0].icon).src} alt={exchangePictures(item.weather[0].icon).alt} />
      </ImgWrapper>
      <TextWrapper>{convertedTemp}</TextWrapper>
    </div>
  );
};

export default Forecast;
