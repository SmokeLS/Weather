import { ActionsType, AppStateType } from './redux-store';
import { weatherAPI } from './../api/api';
import { thunk, ThunkAction } from 'redux-dutiful-thunk';
import { ForecastType, WeatherType } from '../types/types';
import { Dispatch } from 'react';

const SET_CURRENT_WEATHER = 'app/SET_CURRENT_WEATHER';
const SET_FORECAST = 'app/SET_FORECAST';
const SET_TEMPUNIT = 'app/SET_TEMPUNIT';
const SET_CITY = 'app/SET_CITY';
const SET_MAPS = 'app/SET_MAPS';
const SET_ISLOADING = 'app/SET_ISLOADING';

export type InitialStateType = typeof initialState;

const initialState = {
  currentWeather: null as WeatherType | null,
  forecast: null as ForecastType | null,
  tempUnit: '°C' as '°C' | '°F',
  city: 'Moscow' as string,
  maps: [] as Array<string>,
  isLoading: false,
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
    case SET_TEMPUNIT: {
      return {
        ...state,
        tempUnit: action.tempUnit,
      };
    }
    case SET_CITY: {
      return {
        ...state,
        city: action.city,
      };
    }
    case SET_MAPS: {
      return {
        ...state,
        maps: action.maps,
      };
    }
    case SET_ISLOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setCurrentWeather: (currentWeather: WeatherType) => ({ type: SET_CURRENT_WEATHER, currentWeather } as const),
  setForecast: (forecast: ForecastType) => ({ type: SET_FORECAST, forecast } as const),
  setTempUnit: (tempUnit: '°C' | '°F') => ({ type: SET_TEMPUNIT, tempUnit } as const),
  setCity: (city: string) => ({ type: SET_CITY, city } as const),
  setMaps: (maps: Array<string>) => ({ type: SET_MAPS, maps } as const),
  setIsLoading: (isLoading: boolean) => ({ type: SET_ISLOADING, isLoading } as const),
};

export const setCurrentWeather = (
  city: string,
): ThunkAction<AppStateType, ActionsType<typeof actions>, typeof weatherAPI, void> =>
  thunk(async (dispatch: DispatchType) => {
    const currentWeather = await weatherAPI.getCurrentWeather(city);
    dispatch(actions.setCurrentWeather(currentWeather));
  });

export const setCurrentWeatherLatLon = (
  lat: number, lon: number
): ThunkAction<AppStateType, ActionsType<typeof actions>, typeof weatherAPI, void> =>
  thunk(async (dispatch: DispatchType) => {
    const currentWeather = await weatherAPI.getCurrentWeatherLatLon(lat, lon);
    dispatch(actions.setCurrentWeather(currentWeather));
  });

export const setForecast = (
  city: string,
): ThunkAction<AppStateType, ActionsType<typeof actions>, typeof weatherAPI, void> =>
  thunk(async (dispatch: DispatchType) => {
    const forecast = await weatherAPI.getForecast(city);
    dispatch(actions.setForecast(forecast));
  });

  export const setForecastLatLon = (
    lat: number, lon: number
  ): ThunkAction<AppStateType, ActionsType<typeof actions>, typeof weatherAPI, void> =>
    thunk(async (dispatch: DispatchType) => {
      const forecast = await weatherAPI.getForecastLatLon(lat, lon);
      dispatch(actions.setForecast(forecast));
    });
// export const setMaps = (maps?: string): ThunkAction<AppStateType, ActionsType<typeof actions>, typeof mapsAPI, void> =>
//   thunk(async (dispatch: DispatchType) => {
//     // dispatch(actions.setIsLoading(true));
//     const map = await mapsAPI.getMap();
//     //@ts-ignore
//     dispatch(actions.setMaps(map));
//     // dispatch(actions.setIsLoading(false));
//   });

export default appReducer;
