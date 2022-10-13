import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import rainy from '../../../assets/rainy.png';
import { setForecast } from '../../../../redux/app-reducer';
import { AppStateType } from '../../../../redux/redux-store';

const Wrapper = styled.div`
    width: 16.7%;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    text-align: center;
`;

const TextWrapper = styled.div`
    font-size: 32px;
`;

const ImgWrapper = styled.div`
    font-size: 24px;
    color: #81fcfc;
    text-align: center;
`;

const Img = styled.img.attrs(({src}) => ({
    alt: 'rainy',
    src
}))`
    width: 100px;
`;

type PropsType = {
}

const Forecast: React.FC<PropsType> = () => {

    return <Wrapper>
        <TextWrapper><div>27.10.2012</div><div>18:23</div></TextWrapper>
        <ImgWrapper>
            <div>70%</div>
            <Img src={rainy}/>
        </ImgWrapper>
        <TextWrapper>27°C</TextWrapper>
    </Wrapper>
}

export default Forecast;