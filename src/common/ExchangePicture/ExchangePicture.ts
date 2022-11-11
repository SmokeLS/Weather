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

const exchangePicture : Function = (name: string) => {
  switch (name) {
    case '01d': {
      return { src: sun, alt: 'sun' };
    }
    case '02d': {
      return { src: cloudySun, alt: 'cloudy sun' };
    }
    case '03d': {
      return { src: cloud, alt: 'cloud' };
    }
    case '04d': {
      return { src: brokenClouds, alt: 'broken clouds' };
    }
    case '09d': {
      return { src: showerRain, alt: 'shower rain' };
    }
    case '10d': {
      return { src: rainyDay, alt: 'rainy day' };
    }
    case '11d': {
      return { src: storm, alt: 'storm' };
    }
    case '13d': {
      return { src: snow, alt: 'snow' };
    }
    case '50d': {
      return { src: mist, alt: 'mist' };
    }
    case '01n': {
      return { src: night, alt: 'night' };
    }
    case '02n': {
      return { src: cloudyNight, alt: 'cloudy night' };
    }
    case '03n': {
      return { src: cloud, alt: 'cloud' };
    }
    case '04n': {
      return { src: brokenClouds, alt: 'broken clouds' };
    }
    case '09n': {
      return { src: showerRain, alt: 'shower rain' };
    }
    case '10n': {
      return { src: rainyNight, alt: 'rainy night' };
    }
    case '11n': {
      return { src: storm, alt: 'storm' };
    }
    case '13n': {
      return { src: snow, alt: 'snow' };
    }
    case '50n': {
      return { src: mist, alt: 'mist' };
    }
    default: {
      return {src: '', alt: ''}
    }
  }
};

export default exchangePicture;
