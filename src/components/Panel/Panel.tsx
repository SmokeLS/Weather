import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actions, setCurrentWeather, setForecast } from '../../redux/app-reducer';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const inputStyle = {
  background: '#fff',
  borderRadius: '5px',
  width: 260,
  padding: '0 5px',
};

const toolbarStyle = {
  width: '80%',
  margin: '0 auto',
};

const searchStyle = {
  width: 240,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginLeft: 30,
};

const SearchIconStyle = {
  cursor: 'pointer',
  marginLeft: 10,
};

export const Panel = () => {
  const [city, setCity] = React.useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const InputHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const SearchHandler = () => {
    dispatch(actions.setIsLoading(true));
    dispatch(setCurrentWeather(city));
    dispatch(setForecast(city));
    dispatch(actions.setIsLoading(false));
  };

  const MapHandler = () => {
    if (location.pathname === '/map') {
      navigate('');
    } else {
      navigate('/map');
    }
  };

  const ToMainApp = () => {
    navigate('');
  };

  const SearchKeyHandler = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      dispatch(setCurrentWeather(city));
      dispatch(setForecast(city));
    }
  };

  const ButtonPanel = () => {
    return (
      <>
        {location.pathname === '/' ? (
          <Button variant="contained" onClick={MapHandler} style={{ margin: '0 0 0 auto' }}>
            Карта погоды
          </Button>
        ) : (
          <Button variant="contained" onClick={MapHandler} style={{ margin: '0 0 0 auto' }}>
            Виджет погоды
          </Button>
        )}
      </>
    );
  };

  return (
    <Container>
      <AppBar position="static" color="secondary">
        <Toolbar style={toolbarStyle}>
          <Typography onClick={ToMainApp} variant="h6" style={{ cursor: 'pointer' }} noWrap>
            Weather app
          </Typography>
          <Search style={searchStyle}>
            <InputBase
              placeholder="Введите название города"
              onKeyDown={(e) => SearchKeyHandler(e)}
              onChange={(e) => InputHandler(e)}
              style={inputStyle}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconContainer onClick={SearchHandler} style={SearchIconStyle}>
              <SearchIcon />
            </SearchIconContainer>
          </Search>
          <div />
          <ButtonPanel />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Panel;
