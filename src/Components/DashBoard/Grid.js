import React, { useContext, useEffect,useState } from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { useNavigate } from 'react-router-dom';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import CoinContext from '../../Context/CoinContext';
import { ToastContainer } from 'react-toastify';
function Grid({coin}) {
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
    <div onClick={()=>navigate(`/coin/${coin.id}`)} className={`coin-card ${
      coin.price_change_percentage_24h
      < 0 && "coin-card-red"
    }`}>
      <div className='img-flex'>
        <img src={coin.image} alt={coin.name} className='coinsImg'/>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
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
      </div>
      {coin.price_change_percentage_24h> 0 ? (
      <div className='up-down-precentage'>
        <div className='percentage-box'>{coin.price_change_percentage_24h .toFixed(2)}%</div>
        <div className='icon-div'>
          <TrendingUpRoundedIcon/>
        </div>
      </div>):(
      <div className='up-down-precentage'>
        <div className='percentage-box red-chip'>{coin.price_change_percentage_24h .toFixed(2)}%</div>
        <div className='icon-div red-chip'>
          <TrendingDownRoundedIcon/>
        </div>
      </div>
      )}
      <div className="priceInfo">
        <h3 className='rate' style={{
          color: coin.price_change_percentage_24h > 0? 'var(--green)' :"var(--red)"
        }}>${coin.current_price.toLocaleString()}</h3>
        <p className='total_vol'>
          Total Volume : ${coin.total_volume.toLocaleString()}
        </p>
        <p className='total_vol'>
          Market Cap : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default Grid