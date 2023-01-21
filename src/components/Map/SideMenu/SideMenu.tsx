import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

import gradient from '../../../common/gradient';
import WeathersConversion from '../../../common/convertWeathers';

type PropsType = {
  ChangeMaps: Function;
};
type StateType = {
  Temperature: boolean;
  Wind: boolean;
  Rainfall: boolean;
  Snow: boolean;
  Pressure: boolean;
  Clouds: boolean;
  Isobar: boolean;
};

const BoxInfo = styled.div`
  width: 280px;
  height: 24px;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  border-radius: 5px;
  display: flex;
`;

type GradientType = {
  weather: string;
};

const GradientBlock = styled.div<GradientType>`
  width: 200px;
  height: 8px;
  background: ${(props: any) => gradient(props.weather)};
`;

export const SideMenu: React.FC<PropsType> = ({ ChangeMaps }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const [checked, setChecked] = React.useState({
    Temperature: false,
    Wind: false,
    Rainfall: false,
    Snow: false,
    Pressure: false,
    Clouds: false,
    Isobar: false,
  } as StateType);

  const maps = {
    temp_new: checked.Temperature,
    wind_new: checked.Wind,
    rain_new: checked.Rainfall,
    snow_new: checked.Snow,
    pressure_new: checked.Pressure,
    clouds_new: checked.Clouds,
    pressure_cntr: checked.Isobar,
  };

  const handleToggle = (e: any) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const HandleItem = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    //@ts-ignore
    ChangeMaps(Object.keys(maps).filter((item) => maps[item]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const MenuItemTempHandler = (event: Event | React.SyntheticEvent) => {
    if ((event.target as HTMLElement).tagName === 'SPAN' || (event.target as HTMLElement).tagName === 'LABEL') return;
    setChecked(() => ({ ...checked, Temperature: !checked.Temperature }));
  };

  const MenuItemWindHandler = (event: Event | React.SyntheticEvent) => {
    if ((event.target as HTMLElement).tagName === 'SPAN' || (event.target as HTMLElement).tagName === 'LABEL') return;
    setChecked(() => ({ ...checked, Wind: !checked.Wind }));
  };

  const MenuItemRainHandler = (event: Event | React.SyntheticEvent) => {
    if ((event.target as HTMLElement).tagName === 'SPAN' || (event.target as HTMLElement).tagName === 'LABEL') return;
    setChecked(() => ({ ...checked, Rainfall: !checked.Rainfall }));
  };

  const MenuItemSnowHandler = (event: Event | React.SyntheticEvent) => {
    if ((event.target as HTMLElement).tagName === 'SPAN' || (event.target as HTMLElement).tagName === 'LABEL') return;
    setChecked(() => ({ ...checked, Snow: !checked.Snow }));
  };

  const MenuItemPressureHandler = (event: Event | React.SyntheticEvent) => {
    if ((event.target as HTMLElement).tagName === 'SPAN' || (event.target as HTMLElement).tagName === 'LABEL') return;
    setChecked(() => ({ ...checked, Pressure: !checked.Pressure }));
  };

  const MenuItemCloudsHandler = (event: Event | React.SyntheticEvent) => {
    if ((event.target as HTMLElement).tagName === 'SPAN' || (event.target as HTMLElement).tagName === 'LABEL') return;
    setChecked(() => ({ ...checked, Clouds: !checked.Clouds }));
  };

  const MenuItemIsobarHandler = (event: Event | React.SyntheticEvent) => {
    if ((event.target as HTMLElement).tagName === 'SPAN' || (event.target as HTMLElement).tagName === 'LABEL') return;
    setChecked(() => ({ ...checked, Isobar: !checked.Isobar }));
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Stack direction="row" spacing={2} zIndex={9999} position="absolute" right={20} top={80}>
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            variant="contained"
          >
            Фильтры
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={HandleItem}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={MenuItemTempHandler}>
                        <FormControlLabel control={<Checkbox checked={checked.Temperature} />} label="Temperature" />
                      </MenuItem>
                      <MenuItem onClick={MenuItemWindHandler}>
                        <FormControlLabel control={<Checkbox checked={checked.Wind} />} label="Wind" />
                      </MenuItem>
                      <MenuItem onClick={MenuItemRainHandler}>
                        <FormControlLabel control={<Checkbox checked={checked.Rainfall} />} label="Rainfall" />
                      </MenuItem>
                      <MenuItem onClick={MenuItemSnowHandler}>
                        <FormControlLabel control={<Checkbox checked={checked.Snow} />} label="Snow" />
                      </MenuItem>
                      <MenuItem onClick={MenuItemPressureHandler}>
                        <FormControlLabel control={<Checkbox checked={checked.Pressure} />} label="Pressure" />
                      </MenuItem>
                      <MenuItem onClick={MenuItemCloudsHandler}>
                        <FormControlLabel control={<Checkbox checked={checked.Clouds} />} label="Clouds" />
                      </MenuItem>
                      <MenuItem onClick={MenuItemIsobarHandler}>
                        <FormControlLabel control={<Checkbox checked={checked.Isobar} />} label="Isobar" />
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
      <Stack spacing={1} zIndex={9999} position="absolute" right={20} bottom={20}>
        {Object.keys(maps).map((item) => {
          //@ts-ignore
          if (maps[item] && item !== 'pressure_cntr') {
            const convertedWeather = WeathersConversion(item);

            return (
              <BoxInfo key={item}>
                {item}
                <GradientBlock key={convertedWeather} weather={convertedWeather} />
              </BoxInfo>
            );
          }

          return <React.Fragment key={item}></React.Fragment>;
        })}
      </Stack>
    </>
  );
};

export default SideMenu;
