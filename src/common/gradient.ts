type GradientType = {
  Clouds: 'Clouds';
  Pressure: 'Pressure';
  Temperature: 'Temperature';
  Wind: 'Wind';
  Rain: 'Rain';
};

function gradient(name: string): string {
  let cssGradient = '';

  switch (name) {
    case 'Clouds': {
      cssGradient =
        'linear-gradient(to right, rgba(247, 247, 255, 0) 0%, rgba(251, 247, 255, 0) 10%, rgba(244, 248, 255, 0.1) 20%, rgba(240, 249, 255, 0.2) 30%, rgba(221, 250, 255, 0.4) 40%, rgba(224, 224, 224, 0.9) 50%, rgba(224, 224, 224, 0.76) 60%, rgba(228, 228, 228, 0.9) 70%, rgba(232, 232, 232, 0.9) 80%, rgb(214, 213, 213) 90%, rgb(210, 210, 210) 95%, rgb(183, 183, 183) 100%);';
      break;
    }
    case 'Pressure': {
      cssGradient =
        'linear-gradient(to right, rgba(0, 115, 255, 0.5) 0%, rgba(0, 170, 255, 0.5) 8.35059%, rgba(75, 208, 214, 0.5) 24.9192%, rgba(141, 231, 199, 0.5) 41.4879%, rgba(176, 247, 32, 0.5) 49.7722%, rgba(240, 184, 0, 0.5) 58.0565%, rgba(251, 85, 21, 0.5) 74.6251%, rgba(243, 54, 59, 0.5) 91.1938%, rgba(198, 0, 0, 0.5) 100%);';
      break;
    }
    case 'Temperature': {
      cssGradient =
      'linear-gradient(to right, rgba(130, 22, 146, 0.5) 0%, rgba(130, 22, 146, 0.5) 10%, rgba(130, 22, 146, 0.5) 20%, rgba(130, 87, 219, 0.5) 30%, rgba(32, 140, 236, 0.5) 40%, rgba(32, 196, 232, 0.5) 50%, rgba(35, 221, 221, 0.5) 60%, rgba(194, 255, 40, 0.5) 70%, rgba(255, 240, 40, 0.5) 80%, rgba(255, 194, 40,1) 90%, rgba(252, 128, 20, 0.5) 100%);';
      break;
    }
    case 'Wind': {
      cssGradient =
        'linear-gradient(to right, rgba(255,255,255, 0) 0%, rgba(238,206,206, 0.4) 15%, rgba(176, 128, 177, 0.71) 40%, rgba(63,33,59, 0.8) 65%, rgba(116,76,172, 0.9) 80%, rgba(70,0,175,1)) 100%;';
      break;
    }
    case 'Rainfall': {
      cssGradient =
        'linear-gradient(to right, rgba(247, 247, 255, 0) 0%, rgba(100, 20, 200, 0.9) 100%);';
      break;
    }
    case 'Snow': {
      cssGradient =
        'linear-gradient(to right, rgba(247, 247, 255, 0) 0%, rgb(0,191,255, 0.8) 100%);';
      break;
    }
  }

  return cssGradient;
}

export default gradient;
