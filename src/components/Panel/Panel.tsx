import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentWeather, setForecast } from '../../redux/app-reducer';

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

  const InputHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const SearchHandler = () => {
    dispatch(setCurrentWeather(city));
    dispatch(setForecast(city));
  };

  const SearchKeyHandler = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      dispatch(setCurrentWeather(city));
      dispatch(setForecast(city));
    }
  };

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
    width: 230,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 30,
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar style={toolbarStyle}>
          <Typography variant="h6" noWrap>
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
            <SearchIconContainer onClick={SearchHandler}>
              <SearchIcon />
            </SearchIconContainer>
          </Search>
          <div />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Panel;
