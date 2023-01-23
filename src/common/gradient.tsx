import Box from '@mui/material/Box';
import styled from "styled-components";
import { colPressure, toCelsius } from './convert';

const BoxGradientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  align-self: flex-end;
`;

function gradient(name: string): string {
  let cssGradient = '';

  switch (name) {
    case 'Clouds': {
      cssGradient =
        'linear-gradient(to right, rgba(255, 255, 255, 0.0) 0%, rgba(252, 251, 255, 0.2) 20%, rgba(249, 248, 255, 0.4) 40%, rgba(246, 245, 255, 0.75) 60%, rgba(243, 242, 255, 1) 80%, rgba(240, 240, 255, 1) 100%);';
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
      'linear-gradient(to right, rgba(255, 255, 255, 0.0) 0%, rgba(120, 120, 190, 0) 20%, rgba(70, 20, 165, 0.3) 40%, rgba(80,20, 185, 0.7) 60%, rgba(100, 20, 200, 0.9) 100%);';
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

function infoGradient(name: string) {

  let jsxInfo = null;

  switch (name) {
    case 'Clouds': {
      jsxInfo = (<BoxGradientInfo>
                  <Box component="span">0</Box>
                  <Box component="span">20</Box>
                  <Box component="span">40</Box>
                  <Box component="span">60</Box>
                  <Box component="span">80</Box>
                  <Box component="span">100</Box>
                </BoxGradientInfo>);
      break;
    }
    case 'Pressure': {
      jsxInfo = (<BoxGradientInfo>
                  <Box component="span">{colPressure(940)}</Box>
                  <Box component="span">{colPressure(960)}</Box>
                  <Box component="span">{colPressure(980)}</Box>
                  <Box component="span">{colPressure(1000)}</Box>
                  <Box component="span">{colPressure(1020)}</Box>
                  <Box component="span">{colPressure(1040)}</Box>
                  <Box component="span">{colPressure(1060)}</Box>
                </BoxGradientInfo>);
      break;
    }
    case 'Temperature': {
      jsxInfo = (<BoxGradientInfo>
                  <Box component="span">{toCelsius(228)}</Box>
                  <Box component="span">{toCelsius(243)}</Box>
                  <Box component="span">{toCelsius(258)}</Box>
                  <Box component="span">{toCelsius(273)}</Box>
                  <Box component="span">{toCelsius(288)}</Box>
                  <Box component="span">{toCelsius(303)}</Box>
                </BoxGradientInfo>);
      break;
    }
    case 'Wind': {
      jsxInfo = (<BoxGradientInfo>
                  <Box component="span">1</Box> 
                  <Box component="span">5</Box>
                  <Box component="span">15</Box>
                  <Box component="span">25</Box>
                  <Box component="span">50</Box>
                  <Box component="span">100</Box>
                </BoxGradientInfo>);
      break;
    }
    case 'Rainfall': {
      jsxInfo = (<BoxGradientInfo>
                  <Box component="span">0</Box>
                  <Box component="span">1</Box>
                  <Box component="span">5</Box>
                  <Box component="span">10</Box>
                  <Box component="span">100</Box>
                </BoxGradientInfo>);
      break;
    }
    case 'Snow': {
      jsxInfo = (<BoxGradientInfo>
                  <Box component="span">0</Box>
                  <Box component="span">10</Box>
                  <Box component="span">20</Box>
                  <Box component="span">30</Box>
                </BoxGradientInfo>);
      break;
    }
  }

  return jsxInfo;
}

export {gradient, infoGradient };
