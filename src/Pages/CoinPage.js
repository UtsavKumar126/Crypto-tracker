import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from '../Components/Loader';
import { coinObject } from '../functions/convertObject';
import List from '../Components/DashBoard/List';
import CoinInfo from '../Components/Coin/CoinInfo';
import coinCss from "../css/coinpage.css";
import { getCoinData } from '../functions/getCoinsData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../Components/Coin/Chart-Line';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../Components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import TogglePrice from '../Components/Coin/Toggle-buttons';

function CoinPage() {
const{id}=useParams();
const[loading,setLoading]=useState(true);
const [coinData,setCoinData]=useState();
const[days,setDays]=useState(30);
const[chartData,setChartData]=useState({});
const [priceType, setPriceType] = useState('prices');
useEffect(()=>{
    if(id){
        getData();   
    }
},[id])

async function getData(){
    const Data=await getCoinData(id);
    if(Data){
        coinObject(setCoinData,Data);
        const prices=await getCoinPrices(id,days,priceType);
        if(prices.length>0){
            console.log("Wow");
            settingChartData(setChartData,prices);
        }
        setLoading(false);
    }
}
const handleDaysChange = async (event) => {
    setLoading(true)
    setDays(event.target.value);
    const prices=await getCoinPrices(id,event.target.value,priceType);
    if(prices){
        settingChartData(setChartData,prices);
        setLoading(false);
    }
}
  const handlePriceTypeChange = async (event,newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices= await getCoinPrices(id,days,newType);
    console.log(prices);
    if(prices){
        settingChartData(setChartData,prices);
        setLoading(false);
    }
  };
  return (
    <div style={{height:"100%",
                 width:"100vw"}}>
        {loading?<Loader/>:(
        <>    
        <div className='grey-wrapper short-padding'>
            <List coin={coinData}/>
        </div>
        <div className='grey-wrapper'>
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePrice priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} priceType={priceType}/>
        </div>
        <CoinInfo title={coinData.name} desc={coinData.desc}/>
        </>
        )}
    </div> 
  )
}

export default CoinPage