import axios from 'axios';
import { WeatherType } from '../types/types';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

type CountResponse = {
  count: number;
};

export const weatherAPI = {
  async getCurrentWeather(city: string) {
    const res = await instance.get<WeatherType>(
      `weather?appid=0e2def30c3069fd2e56f866c8c70d407&q=${city}`,
    );
    return res.data;
  },
  async getForecast(city: string) {
    const res = await instance.get<CountResponse>(
      `forecast?appid=0e2def30c3069fd2e56f866c8c70d407&q=${city}`,
    );
    return res.data;
  },
  async getAirPollution(lon: number, lat: number) {
    const res = await instance.get<CountResponse>(
      `air_pollution?appid=0e2def30c3069fd2e56f866c8c70d407&lon=${lon}&lat=${lat}`,
    );
    return res.data;
  },
};
