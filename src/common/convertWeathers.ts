const WeathersConversion = (weatherType: string): string => {
  let convertedWeather = '';

  switch (weatherType) {
    case 'temp_new': {
      convertedWeather = 'Temperature';
      break;
    }
    case 'rain_new': {
      convertedWeather = 'Rainfall';
      break;
    }
    case 'wind_new': {
      convertedWeather = 'Wind';
      break;
    }
    case 'snow_new': {
      convertedWeather = 'Snow';
      break;
    }
    case 'clouds_new': {
      convertedWeather = 'Clouds';
      break;
    }
    case 'pressure_new': {
      convertedWeather = 'Pressure';
      break;
    }
  }

  return convertedWeather;
};

export default WeathersConversion;
