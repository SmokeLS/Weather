import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { actions } from '../../redux/app-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Button, ButtonCover, CheckBox, Knobs, Layer, ToggleButtonCover } from './SwitcherStyles';

type Props = {};

const Switcher: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const tempUnit = useSelector((state: AppStateType) => state.app.tempUnit);
  
  const CheckBoxHandler = () => {
    (tempUnit === "°C" ? dispatch(actions.setTempUnit("°F")) : dispatch(actions.setTempUnit("°C")));
  }

  const checked = tempUnit === "°F" ? true : false;

  return (
    <ToggleButtonCover>
      <ButtonCover>
        <Button>
          <CheckBox type="checkbox" checked={checked} onChange={CheckBoxHandler}/>
          <Knobs />
          <Layer />
        </Button>
      </ButtonCover>
    </ToggleButtonCover>
  );
};

export default Switcher;
