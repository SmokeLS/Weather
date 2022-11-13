import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

type StateType = { Temperature: boolean; Wind: boolean; Rainfall: boolean; Snow: boolean; Pressure: boolean };

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const [checked, setChecked] = React.useState({
    Temperature: false,
    Wind: false,
    Rainfall: false,
    Snow: false,
    Pressure: false,
  } as StateType);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const HandleItem = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const MenuItemTempHandler = (event: Event | React.SyntheticEvent) => {
    if((event.target as HTMLElement).tagName === "SPAN") return;
    setChecked(() => ({ ...checked, Temperature: !checked.Temperature }));
  };
  
  const MenuItemWindHandler = (event: Event | React.SyntheticEvent) => {
    if((event.target as HTMLElement).tagName === "SPAN") return;
    setChecked(() => ({ ...checked, Wind: !checked.Wind }));
  };
  
  const MenuItemRainHandler = (event: Event | React.SyntheticEvent) => {
    if((event.target as HTMLElement).tagName === "SPAN") return;
    setChecked(() => ({ ...checked, Rainfall: !checked.Rainfall }));
  };

  const MenuItemSnowHandler = (event: Event | React.SyntheticEvent) => {
    if((event.target as HTMLElement).tagName === "SPAN") return;
    setChecked(() => ({ ...checked, Snow: !checked.Snow }));
  };

  const MenuItemPressureHandler = (event: Event | React.SyntheticEvent) => {
    if((event.target as HTMLElement).tagName === "SPAN") return;
    setChecked(() => ({ ...checked, Pressure: !checked.Pressure }));
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
    <Stack direction="row" spacing={2} zIndex={9999} position="absolute" right={30} top={10}>
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
          Dashboard
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
                      <FormControlLabel control={<Checkbox checked={checked.Wind}/>} label="Wind" />
                    </MenuItem>
                    <MenuItem onClick={MenuItemRainHandler}>
                      <FormControlLabel control={<Checkbox checked={checked.Rainfall}/>} label="Rainfall" />
                    </MenuItem>
                    <MenuItem onClick={MenuItemSnowHandler}>
                      <FormControlLabel control={<Checkbox checked={checked.Snow}/>} label="Snow" />
                    </MenuItem>
                    <MenuItem onClick={MenuItemPressureHandler}>
                      <FormControlLabel control={<Checkbox checked={checked.Pressure}/>} label="Pressure" />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
