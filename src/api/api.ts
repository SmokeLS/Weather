import axios from 'axios';
import { ForecastType, WeatherType } from '../types/types';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const selectedLang = 'ru'

type CountResponse = {
  count: number;
};

export const weatherAPI = {
  async getCurrentWeather(city: string) {
    const res = await instance.get<WeatherType>(`weather?appid=0e2def30c3069fd2e56f866c8c70d407&q=${city}&lang=${selectedLang}`);
    return res.data;
  },
  async getCurrentWeatherLatLon(lat: number, lon: number) {
    const res = await instance.get<WeatherType>(`weather?appid=0e2def30c3069fd2e56f866c8c70d407&lat=${lat}&lon=${lon}&lang=${selectedLang}`);
    return res.data;
  },
  async getForecast(city: string) {
    const res = await instance.get<ForecastType>(`forecast?appid=0e2def30c3069fd2e56f866c8c70d407&q=${city}&lang=${selectedLang}`);
    return res.data;
  },
  async getForecastLatLon(lat: number, lon: number) {
    const res = await instance.get<ForecastType>(`forecast?appid=0e2def30c3069fd2e56f866c8c70d407&lat=${lat}&lon=${lon}&lang=${selectedLang}`);
    return res.data;
  },
  // async getCities() {
  //   const res = await instance.get<CountResponse>(
  //     `box/city?appid=0e2def30c3069fd2e56f866c8c70d407&cnt=300&format=json&units=metric&bbox=9.003295898437502,50.28582948111451,14.095458984375002,52.81936300159786,10&callback=L.OWM.Utils.callbacks[5]`,
  //   );
  //   return res.data;
  // },
  async getAirPollution(lon: number, lat: number) {
    const res = await instance.get<CountResponse>(
      `air_pollution?appid=0e2def30c3069fd2e56f866c8c70d407&lon=${lon}&lat=${lat}`,
    );
    return res.data;
  },
};
