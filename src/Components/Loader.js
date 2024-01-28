import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import loaderCss from "../css/Loader.css"

function Loader() {
  return (
    <div className='loader-container'>
        <CircularProgress />
    </div>
  )
}

export default Loader