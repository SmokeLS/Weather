import { ActionsType, AppStateType } from './redux-store';
import { weatherAPI } from './../api/api';
import { thunk, ThunkAction } from 'redux-dutiful-thunk';
import { ForecastType, WeatherType } from '../types/types';
import { Dispatch } from 'react';

const SET_CURRENT_WEATHER = 'app/SET_CURRENT_WEATHER';
const SET_FORECAST = 'app/SET_FORECAST';

export type InitialStateType = typeof initialState;
 
const initialState = {
    currentWeather: null as WeatherType | null,
    forecast: null as ForecastType | null,
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
    case SET_FORECAST: {
      return {
        ...state,
        forecast: action.forecast,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setCurrentWeather: (currentWeather: WeatherType) => ({ type: SET_CURRENT_WEATHER, currentWeather } as const),
  setForecast: (forecast: ForecastType) => ({type: SET_FORECAST, forecast} as const),
};

export const setCurrentWeather = (city: string) : ThunkAction<AppStateType, ActionsType<typeof actions>, typeof weatherAPI, void> => thunk(async (dispatch: DispatchType) => {
    // dispatch(actions.setIsLoading(true));
    const currentWeather = await weatherAPI.getCurrentWeather(city);
    dispatch(actions.setCurrentWeather(currentWeather));
    // dispatch(actions.setIsLoading(false));
  });
  
  export const setForecast = (city: string) : ThunkAction<AppStateType, ActionsType<typeof actions>, typeof weatherAPI, void> => thunk(async (dispatch: DispatchType) => {
    // dispatch(actions.setIsLoading(true));
    const forecast = await weatherAPI.getForecast(city);
    dispatch(actions.setForecast(forecast));
    // dispatch(actions.setIsLoading(false));
  });

export default appReducer;
