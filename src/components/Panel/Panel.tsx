import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actions, setCurrentWeather, setForecast } from '../../redux/app-reducer';
import MediaQuery from 'react-responsive';
import classes from './Panel.module.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { IconButton, SvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons/faCloud';

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

  type ButtonPanelType = {
    isMobile: boolean;
  };

  const ButtonPanel: React.FC<ButtonPanelType> = ({ isMobile }) => {
    return (
      <>
        {!isMobile && (
          <>
            {location.pathname === '/' ? (
              <Button variant="contained" onClick={MapHandler} sx={{ margin: '0 0 0 auto' }}>
                Карта погоды
              </Button>
            ) : (
              <Button variant="contained" onClick={MapHandler} sx={{ margin: '0 0 0 auto' }}>
                Виджет погоды
              </Button>
            )}
          </>
        )}
        {isMobile && (
          <>
            {location.pathname === '/' ? (
              <IconButton aria-label="cloud" color="primary" onClick={MapHandler}>
                <FontAwesomeIcon icon={faCloud} />
              </IconButton>
            ) : (
              <IconButton aria-label="home" color="primary" onClick={MapHandler}>
                <FontAwesomeIcon icon={faCloud} />
              </IconButton>
            )}
          </>
        )}
      </>
    );
  };

  return (
    <Container>
      <AppBar position="sticky" color="transparent">
        <MediaQuery minWidth={769}>
          <Toolbar className={classes.toolbarStyle} disableGutters>
            <Typography onClick={ToMainApp} variant="h6" style={{ cursor: 'pointer' }} color="primary" noWrap>
              Weather app
            </Typography>
            <Search className={classes.searchStyle}>
              <InputBase
                placeholder="Введите название города"
                onKeyDown={(e) => SearchKeyHandler(e)}
                onChange={(e) => InputHandler(e)}
                className={classes.inputStyle}
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIconContainer onClick={SearchHandler} className={classes.SearchIconStyle}>
                <SearchIcon />
              </SearchIconContainer>
            </Search>
            <ButtonPanel isMobile={false} />
          </Toolbar>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Toolbar className={classes.toolbarStyleMobile} disableGutters>
            <SvgIcon sx={{ fontSize: 40, cursor: 'pointer' }} color="primary" onClick={ToMainApp}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
            <Search className={classes.searchStyleMobile}>
              <InputBase
                placeholder="Введите название города"
                onKeyDown={(e) => SearchKeyHandler(e)}
                onChange={(e) => InputHandler(e)}
                className={classes.inputStyleMobile}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <ButtonPanel isMobile={true} />
          </Toolbar>
        </MediaQuery>
      </AppBar>
    </Container>
  );
};

export default Panel;
