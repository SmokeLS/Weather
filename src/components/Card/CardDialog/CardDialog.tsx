import { Card, CardContent, CardMedia, makeStyles, Typography } from '@mui/material';
import React from 'react';
import { colPressure, toCelsius, toFahrenheit } from '../../../common/convert';
import { months } from '../../../common/dates';
import { ListType } from '../../../types/types';

type Props = {
  activeForecast: ListType;
};

const CardDialog: React.FC<Props> = ({activeForecast}) => {
  const stringMonth = activeForecast.dt_txt.toString().slice(5,7);
  const stringDay = activeForecast.dt_txt.toString().slice(8,10);
  
  return (
    <Card style={{width: 350}} className={'root'}>
      <CardContent>
        <Typography gutterBottom variant='h5'>
          Дата: {stringDay} {months[+stringMonth-1]} {activeForecast.dt_txt.slice(11, 16)}
        </Typography>
        <Typography gutterBottom color='textSecondary'>
          Температура: {toCelsius(activeForecast.main.temp)}°C
          <br />
          Ощущается как: {toCelsius(activeForecast.main.feels_like)}°C
          <br />
          Давление: {colPressure(activeForecast.main.pressure)}мм. рт. ст.
          <br />
          Влажность: {activeForecast.main.humidity}%
          <br />
          Скорость ветра: {activeForecast.wind.speed}м/с.
          <br />
          Атмосферная видимость: {activeForecast.visibility}м.
          <br />
        </Typography>
        {/* {character.alias.map((alias: any) => (
          <Chip key={alias} style={{ margin: 3 }} size='small' label={alias} />
        ))}
        <Typography color='textSecondary'>Abilities:</Typography>
        {character.abilities.map((ability: any) => (
          <Chip
            key={ability}
            style={{ margin: 3 }}
            size='small'
            label={ability}
          />
        ))} */}
      </CardContent>
    </Card>
  );
};

export default CardDialog;