import React from 'react'
import { Switch } from "@mui/material";

function SwitchTheme({checked,setChecked}) {
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>
  )
}

export default SwitchTheme;