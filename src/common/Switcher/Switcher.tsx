import React from 'react';
import styled from 'styled-components';

type Props = {};

const ToggleButtonCover = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: -30px;
  width: 74px;
  height: 36px;
  border-radius: 100px;
`;

const ButtonCover = styled.div`
  height: 36px;
  position: absolute;
  background-color: rgba(3, 169, 244, 0.6);
  box-shadow: 0 10px 20px -8px #c5d6d6;
  border-radius: 100px;
  transition: 0.3s ease all;
`;

const CheckBox = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
`;

const Knobs = styled.div`
  z-index: 2;
  &:before,
  &:after {
    content: '°С';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    z-index: 2;
    transition: 0.3s ease all;
  }
  &:before {
    content: '°C';
  }

  &:after {
    content: '°F';
  }

  &:after {
    right: -28px;
    left: auto;
    background-color: #f44336;
  }
`;

const Layer = styled.div`
  width: 100%;
  height: 36px;
  transition: 0.3s ease all;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
`;

const Button = styled.div`
  position: relative;
  alignitems: center;
  width: 74px;
  height: 36px;
  border-radius: 100px;
  margin: 0 auto;
  overflow: hidden;
  &.right,
  ${Layer} {
    border-radius: 100px;
  }

  ${CheckBox}:checked + ${Knobs}:before {
    left: -28px;
  }

  ${CheckBox}:checked + ${Knobs}:after {
    right: 4px;
  }

  ${CheckBox}:checked ~ ${Layer} {
    transition: 0.3s ease all;
    background: rgba(244, 67, 54, 0.6);
  }
`;

const Switcher: React.FC<Props> = () => {
  return (
    <ToggleButtonCover>
      <ButtonCover>
        <Button>
          <CheckBox type="checkbox" />
          <Knobs />
          <Layer />
        </Button>
      </ButtonCover>
    </ToggleButtonCover>
  );
};

export default Switcher;
