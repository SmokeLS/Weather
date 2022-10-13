export type WeatherType = {
  coord: CoordinationType;
  weather: Array<WeatherDescType>;
  base: string;
  main: MainType;
  visibility: number;
  wind: WindType;
  clouds: {
    all: number;
  };
  dt: number;
  sys: SysType;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type CoordinationType = {
  lon: number;
  lat: number;
};

type WeatherDescType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type MainType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

type WindType = {
  speed: number;
  deg: number;
  gust: number;
};

type SysType = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type ForecastType = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<ListType>;
  city: CityType;
  country: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number,
};

export type ListType = {
  dt: number;
  main: MainListType;
  weather: Array<WeatherDescType>;
  clouds: {
    all: number;
  };
  wind: WindType;
  visibility: number;
  pop: number;
  rain: {
    '3h': string;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

type MainListType = MainType & {
  temp_kf: number;
};

type CityType = {
    id: number,
    name: string,
    coord: CoordinationType,
}