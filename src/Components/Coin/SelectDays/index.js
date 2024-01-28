import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./styles.css"

export default function SelectDays({days,handleDaysChange,nopTag}) {
  return (
    <div className='select-days'>
        {!nopTag&&<p>Price Change In</p>}
        <Select
        sx={{
            height:"2.5rem",
            color:"var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
                color: "var(--white)",
            },
            "&:hover": {
                "&& fieldset": {
                    borderColor: "var(--blue)",
                },
            },
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={90}>90 days</MenuItem>
          <MenuItem value={120}>120 days</MenuItem>
          <MenuItem value={365}>365 days</MenuItem>
        </Select>
    </div>
  );
}