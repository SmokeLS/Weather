import React from 'react';
import styled from 'styled-components';
import rainy from '../../../assets/rainy.png';

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

function Forecast() {
    return <Wrapper>
        <TextWrapper>18:23</TextWrapper>
        <ImgWrapper>
            <div>70%</div>
            <Img src={rainy}/>
        </ImgWrapper>
        <TextWrapper>27°C</TextWrapper>
    </Wrapper>
}

export default Forecast;