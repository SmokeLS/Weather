import axios from 'axios';
import { ForecastType, WeatherType } from '../types/types';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

type CountResponse = {
  count: number;
};

export const weatherAPI = {
  async getCurrentWeather(city: string) {
    const res = await instance.get<WeatherType>(`weather?appid=0e2def30c3069fd2e56f866c8c70d407&q=${city}`);
    return res.data;
  },
  async getForecast(city: string) {
    const res = await instance.get<ForecastType>(`forecast?appid=0e2def30c3069fd2e56f866c8c70d407&q=${city}`);
    return res.data;
  },
  async getAirPollution(lon: number, lat: number) {
    const res = await instance.get<CountResponse>(
      `air_pollution?appid=0e2def30c3069fd2e56f866c8c70d407&lon=${lon}&lat=${lat}`,
    );
    return res.data;
  },
};

// const instanceMaps = axios.create({
//   baseURL: 'https://{s}.tile.openweathermap.org/',
// });

// export const mapsAPI = {
//   async getMap(z: number = 0, x: number = 0, y: number = 0) {
//     if (z || x || y) {
//       const res = await instanceMaps.get<CountResponse>(`${z}/${x}/${y}.png`);
//       return res.data;
//     } else {
//       const res = await instanceMaps.get<CountResponse>(`{z}/{x}/{y}.png`);
//       console.log(res);
//       return res.data;
//     }
//   },
//   async getTempMap(z: number = 0, x: number = 0, y: number = 0) {
//     if (z || x || y) {
//       const res = await instanceMaps.get(
//         `map/temp_new/${z}/${x}/${y}.png?appid=82cd9c64b0e678fe5ce342593e19f7de`,
//       );
//       return res.data;
//     } else {
//       const res = await instanceMaps.get(
//         `map/temp_new/{z}/{x}/{y}.png?appid=82cd9c64b0e678fe5ce342593e19f7de`,
//       );
//       console.log(res);
//       return res.data;
//     }
//   },
// };
