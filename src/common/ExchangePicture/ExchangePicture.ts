import sun from '../../assets/sun.png';
import storm from '../../assets/storm.png';
import snow from '../../assets/snow.png';
import showerRain from '../../assets/shower-rain.png';
import rainyDay from '../../assets/rainy-day.png';
import rainyNight from '../../assets/rainy-night.png';
import night from '../../assets/night.png';
import mist from '../../assets/mist.png';
import cloudySun from '../../assets/cloudy-sun.png';
import cloudyNight from '../../assets/cloudy-night.png';
import cloud from '../../assets/cloud.png';
import brokenClouds from '../../assets/broken-clouds.png';

const ExchangePicture = (name: string) => {
  switch (name) {
    case '01d': {
      return sun;
    }
    case '02d': {
      return cloudySun;
    }
    case '03d': {
      return cloud;
    }
    case '04d': {
      return brokenClouds;
    }
    case '09d': {
      return showerRain;
    }
    case '10d': {
      return rainyDay;
    }
    case '11d': {
      return storm;
    }
    case '13d': {
      return snow;
    }
    case '50d': {
      return mist;
    }
    case '01n': {
      return night;
    }
    case '02n': {
      return cloudyNight;
    }
    case '03n': {
      return cloud;
    }
    case '04n': {
      return brokenClouds;
    }
    case '09n': {
      return showerRain;
    }
    case '10n': {
      return rainyNight;
    }
    case '11n': {
      return storm;
    }
    case '13n': {
      return snow;
    }
    case '50n': {
      return mist;
    }
  }
};

export default ExchangePicture;
