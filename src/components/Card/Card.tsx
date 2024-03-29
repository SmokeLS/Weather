import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Dialog from '@mui/material/Dialog';
import { useMediaQuery } from '@mui/material';

import Forecast from './Forecast/Forecast';
import SliderForecast from './SliderForecast/SliderForecast';
import Weather from './Weather/Weather';
import Temperature from './Temperature/Temperature';
import { AppStateType } from '../../redux/redux-store';
import { ListType } from '../../types/types';
import CardDialog from './CardDialog/CardDialog';
import Switcher from '../../common/Switcher/Switcher';
import Preloader from '../../common/Preloader/Preloader';

const CardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 80%;
  border-radius: 15px;
  padding: 25px;
  padding-top: 50px;
  margin: auto;
`;

const UpperSection = styled.div`
  display: flex;
  position: relative;
  height: 40%;
  border-bottom: 4px solid rgba(60, 60, 60, 0.4);
  flex-direction: row;
  padding-bottom: 25px;
`;

const UpperSectionMobile = styled.div`
  display: flex;
  position: relative;
  height: 40%;
  padding-bottom: 25px;
  border-bottom: 4px solid rgba(60, 60, 60, 0.4);
  flex-direction: column;
`;

const SliderProps = {
  zoomFactor: 5,
  slideMargin: 50,
  maxVisibleSlides: 4,
  pageTransition: 500,
};

type PropsType = {};

const Card: React.FC<PropsType> = () => {
  const forecast = useSelector((state: AppStateType) => state.app.forecast);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [activeForecast, setActiveForecast] = useState<ListType>({} as ListType);
  const isLowScreenMobile = useMediaQuery('(max-width:370px)');

  const handleOpenDialog = (item: ListType) => {
    setIsDialogOpen(true);
    setActiveForecast(item);
  };

  if (!forecast) {
    return <Preloader />;
  }

  return (
    <>
      <Dialog onClose={() => setIsDialogOpen(false)} open={isDialogOpen}>
        <CardDialog activeForecast={activeForecast} />
      </Dialog>
      <CardWrapper>
        <MediaQuery minWidth={768}>
          <UpperSection>
            <Switcher />
            <Weather />
            <Temperature />
          </UpperSection>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <UpperSectionMobile>
            <Switcher />
            <Weather />
            <Temperature />
          </UpperSectionMobile>
        </MediaQuery>
        <SliderForecast {...SliderProps} slideMargin={isLowScreenMobile ? 10 : SliderProps.slideMargin}>
          {forecast.list.map((item, index) => {
            return <Forecast key={item.dt} handleOpenDialog={() => handleOpenDialog(item)} item={item} index={index} />;
          })}
        </SliderForecast>
      </CardWrapper>
    </>
  );
};

export default Card;
