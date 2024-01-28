import React, { useState } from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import listcss from "../../css/list.css";
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../functions/convertNumber';
import { useNavigate } from 'react-router-dom';
import CoinContext from '../../Context/CoinContext';
import { useContext } from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
function List({coin}) {
  const navigate=useNavigate();
  const{watchList,addToWatchList,removeFromWatchList,notify}=useContext(CoinContext);
  const[addedToWatchList,setAddedToWatchList]=useState(watchList.includes(coin.name));
  const handleClick=(e)=>{
    e.stopPropagation();
    setAddedToWatchList(!addedToWatchList);
    if(!addedToWatchList){
    addToWatchList(coin.name);
    notify("Added to watch list");
    }
    else{
    removeFromWatchList(coin.name);
    notify("Removed from watch list");
    }
  }
  return (
    <tr className='table-row' onClick={()=>navigate(`/coin/${coin.id}`)}>
      <Tooltip title="Logo">
        <td className='img-td'>
        <img src={coin.image} alt={coin.name} className='coinsImg'/>
        </td>
      </Tooltip>
        
        <td>
            <div className='name-col'>
            <Tooltip title="Symbol">
              <p className='coin-symbol decrease-sym'>{coin.symbol}</p>
            </Tooltip> 
            <Tooltip title="Name">
               <p className='coin-name decrease-name'>{coin.name}</p>
            </Tooltip>
            
            </div>
        </td>
      {coin.price_change_percentage_24h > 0 ? (
      <Tooltip title="Change">
        <td className='up-down-precentage decrease-margin'>
            <div className='percentage-box reduce-size'>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-div remove-icon'>
            <TrendingUpRoundedIcon/>
            </div>
        </td>
      </Tooltip>  
       ):(
        <Tooltip title="Change">
            <td className='up-down-precentage decrease-margin'>
            <div className='percentage-box red-chip reduce-size'>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-div red-chip remove-icon'>
            <TrendingDownRoundedIcon/>
            </div>
        </td>
      </Tooltip>
      )}
      <td>
        <Tooltip title="Current Price">
          <h3 className='rate align-price' style={{
            color: coin.price_change_percentage_24h > 0? 'var(--green)' :"var(--red)"
          }}>
            ${coin.current_price.toLocaleString()}
          </h3>
        </Tooltip>
        
      </td>
      <td>
        <Tooltip title="Total Volume">
          <p className='align-left remove-icon'>
            ${coin.total_volume.toLocaleString()}
          </p>
        </Tooltip>  
      </td>
      <td className='desktop-marketCap market-left'>
        <Tooltip title="Market Cap">
          <p className='align-left'>
            ${coin.market_cap.toLocaleString()}
          </p>
        </Tooltip>  
      </td>
      <td className='mobile-marketCap'>
        <Tooltip title="Market Cap">
          <p className='align-left'>
            ${convertNumbers(coin.market_cap)}
          </p>
        </Tooltip>  
      </td>
      <td className='star'>
        <Tooltip title={!watchList.includes(coin.name)?"Add To WatchList":"Remove from WatchList"}>
        {coin.price_change_percentage_24h> 0?(
        <div className='star-div' onClick={handleClick}>
          {watchList.includes(coin.name)?<StarRateRoundedIcon/>:
          <StarBorderRoundedIcon/>
          }
        </div>):(
          <div className='star-div red-chip' onClick={handleClick}>
          {watchList.includes(coin.name)?<StarRateRoundedIcon/>:
          <StarBorderRoundedIcon/>
          }
          </div>
        )
        }
        </Tooltip>  
      </td>
    </tr>
  )
}

export default List