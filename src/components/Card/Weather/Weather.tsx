import React from 'react';
import styled from 'styled-components';
import rainy from '../../../assets/rainy.png';
import { WeatherType } from '../../../types/types';

const Wrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`;

const TextWrapper = styled.div`
    font-size: 32px;
    color: #fff;
`;

const Img = styled.img.attrs(({src}) => ({
    alt: 'rainy',
    src
}))`
    width: 140px;
    align-self: flex-start;
    margin-right: 20px
`;

type PropsType = {
    currentWeather: WeatherType | null;
};

const Weather : React.FC<PropsType> = ({currentWeather}) => {
    console.log(currentWeather);
    return <Wrapper>
        <Img src={rainy}/>
        <TextWrapper>
            <div>Москва</div>
            <div>ЦАО</div>
            <div>Влажность: {currentWeather?.main.humidity}</div>
        </TextWrapper>
    </Wrapper>
}

export default Weather;