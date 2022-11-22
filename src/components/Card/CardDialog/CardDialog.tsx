import { Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { colPressure, toCelsius, toFahrenheit } from '../../../common/convert';
import { months } from '../../../common/dates';
import { AppStateType } from '../../../redux/redux-store';
import { ListType } from '../../../types/types';

type Props = {
  activeForecast: ListType;
};

const CardDialog: React.FC<Props> = ({ activeForecast }) => {
  const stringMonth = activeForecast.dt_txt.toString().slice(5, 7);
  const stringDay = activeForecast.dt_txt.toString().slice(8, 10);
  const isLowScreenMobile = useMediaQuery('(max-width: 380px)');

  const tempUnit = useSelector((state: AppStateType) => state.app.tempUnit);
  const convertedTemp =
    tempUnit === '°C' ? `${toCelsius(activeForecast.main.temp)}°C` : `${toFahrenheit(activeForecast.main.temp)}°F`;
  const convertedFeelsLike =
    tempUnit === '°C'
      ? `${toCelsius(activeForecast.main.feels_like)}°C`
      : `${toFahrenheit(activeForecast.main.feels_like)}°F`;

  return (
    <Card style={{ width: isLowScreenMobile ? 216 : 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Дата: {stringDay} {months[+stringMonth - 1]} {activeForecast.dt_txt.slice(11, 16)}
        </Typography>
        <Typography gutterBottom color="textSecondary">
          Температура: {convertedTemp}
          <br />
          Ощущается как: {convertedFeelsLike}
          <br />
          Давление: {colPressure(activeForecast.main.pressure)}мм. рт. ст.
          <br />
          Влажность: {activeForecast.main.humidity}%
          <br />
          Скорость ветра: {activeForecast.wind.speed}м/с.
          <br />
          Видимость: {activeForecast.visibility}м.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDialog;
