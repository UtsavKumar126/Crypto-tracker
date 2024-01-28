import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SwitchTheme from './SwitchTheme';

function TemporaryDrawer({checked,setChecked}) {
  const [open, setOpen] =useState(false);
  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon style={{
            color:"var(--grey)",
          }}/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className='drawer-links'>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/compare"}>Compare</NavLink>
              <NavLink to={"/dashboard"}>DashBoard</NavLink>
              <NavLink to={"/watchlist"}>Watchlist</NavLink>
              <div className='switch'>
                <SwitchTheme checked={checked} setChecked={setChecked}/>
              </div>
            </div>
          </Drawer>
    </div>
  );
}

export default TemporaryDrawer;