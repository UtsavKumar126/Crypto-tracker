import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import paginationCss from "../../css/pagination.css"

export default function PaginationControlled({page,handleChange}) {
  return (
    <div className='page-comp'>
      <Pagination 
  count={10} 
  page={page} 
  onChange={(e,v)=>handleChange(e,v)}
  sx={{
    color: "white !important",
    "& .Mui-selected": {
      backgroundColor: "var(--blue) !important",
      color: "white !important",
      borderColor: "var(--blue) !important",
      borderRadius: "50%", // Set border-radius for selected pages
      "& .MuiPaginationItem-text": {
        color: "white !important", // Set the text color for selected pages
      },
      "& .MuiPaginationItem-ellipsis": {
        border: "0px solid var(--white) !important", // Set the ellipsis border color for selected pages
      },
      "& .MuiPaginationItem-icon": {
        borderRadius: "50%", // Set border-radius for the arrow icon on selected pages
      },
    },
    "& .MuiPaginationItem-text": {
      color: "var(--white) !important", // Set the text color for unselected pages
      border: "1px solid var(--white)", // Set the border color for unselected pages
      borderRadius: "50%", // Set border-radius for unselected pages
    },
    "& .MuiPaginationItem-ellipsis": {
      border: "0px solid var(--white) !important", // Set the ellipsis border color for unselected pages
    },
    "& .MuiPaginationItem-icon": {
      borderRadius: "50%", // Set border-radius for the arrow icon on unselected pages
    },
  }}
/>
</div>
  );
}