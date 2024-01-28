import React, { useState } from 'react'
import searchCss from "../../css/search.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({search,setSearch}) {
    
  return (
    <div className='search-bar'>
        <SearchRoundedIcon/>
        <input placeholder='Search' type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search