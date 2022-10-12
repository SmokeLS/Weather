import { ActionsType, AppStateType } from './redux-store';
import { weatherAPI } from './../api/api';
import { ThunkAction } from 'redux-thunk';
import { WeatherType } from '../types/types';
import { Dispatch } from 'react';

const SET_CURRENT_WEATHER = 'app/SET_CURRENT_WEATHER';

export type InitialStateType = typeof initialState;
 
const initialState = {
    currentWeather: null as WeatherType | null,
};

type DispatchType = Dispatch<ActionsType<typeof actions>>;

const appReducer = (state = initialState, action: ActionsType<typeof actions>): InitialStateType => {
  switch (action.type) {
    case SET_CURRENT_WEATHER: {
      return {
        ...state,
        currentWeather: action.currentWeather,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setCurrentWeather: (currentWeather: WeatherType) => ({ type: SET_CURRENT_WEATHER, currentWeather } as const),
};

// ThunkAction<void, AppStateType, unknown, ActionsType<typeof actions>>

export const setCurrentWeather = (city: string) : any => async (dispatch: DispatchType) => {
    // dispatch(actions.setIsLoading(true));
    const currentWeather = await weatherAPI.getCurrentWeather(city);
    dispatch(actions.setCurrentWeather(currentWeather));
    // dispatch(actions.setIsLoading(false));
  };
  

export default appReducer;
