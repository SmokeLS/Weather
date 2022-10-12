import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`;

const TextTemperatureWrapper = styled.div`
    font-size: 80px;
    line-height: 86px;
`;

const TextDateWrapper = styled.div`
    font-size: 32px;
`;

type PropsType = {};

const Temperature: React.FC<PropsType> = () => {
    return <Wrapper>
        <TextTemperatureWrapper>27°C</TextTemperatureWrapper>
        <TextDateWrapper>05/18 Четверг</TextDateWrapper>
    </Wrapper>
}

export default Temperature;