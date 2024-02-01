import React, { useContext } from 'react'
import { Switch } from "@mui/material";
import ThemeContext from '../../Context/Theme/ThemeContext';

function SwitchTheme({checked,setChecked}) {
  const {theme,setTheme} =useContext(ThemeContext);
  const handleChange = (event) => {
    setTheme(theme==="light"?"dark":"light");
    localStorage.setItem('theme',theme);
    setChecked(event.target.checked);
    document.body.setAttribute("data-theme",theme);
  };
  return (
    <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>
  )
}

export default SwitchTheme;