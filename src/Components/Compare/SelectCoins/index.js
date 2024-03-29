import React, { useState,useEffect } from 'react'
import { get100Coins } from '../../../functions/get100Coins';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import "./styles.css"
import SelectDays from '../../Coin/SelectDays';

function SelectCoins({allCoins,crypto1,crypto2,handleCoinChange,days,handleDaysChange}) {
    const styles={
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
    }
  return (
    <div className='coin-flex'>
      <p>Crypto 1</p>
        <Select
        sx={styles}
          value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event,false)}
        >
          {allCoins.filter((item)=>item.id!=crypto2)
          .map((coin)=><MenuItem value={coin.id}>{coin.name}</MenuItem>)}
        </Select>
        <p>Crypto 2</p>
        <Select
        sx={styles}
          value={crypto2}
          label="Crypto 2"
          onChange={(event)=>handleCoinChange(event,true)}
        >
          {allCoins.filter((item)=>item.id!=crypto1).map((coin,i)=><MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>)}
        </Select>
        <SelectDays
        days={days}
        handleDaysChange={handleDaysChange}
        nopTag={true}
        />
    </div>
  )
}
export default SelectCoins