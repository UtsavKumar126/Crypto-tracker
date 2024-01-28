import "./styles.css";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";

export default function TogglePrice({priceType,handlePriceTypeChange}) {
  

  return (
    <div className="toogle-group">
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "& .Mui-selected": {
            color: "var(--blue) !important"
        },
        borderColor: "var(--blue) !important",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset !important",
            color: "var(--blue) !important",
        },
        "& .MuiToggleButton-standard":{
            color: "var(--blue) !important",
        },
      }}
    >
      <ToggleButton value="prices" className="toogle-btn">
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" className="toogle-btn">
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" className="toogle-btn">
        Total Volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
