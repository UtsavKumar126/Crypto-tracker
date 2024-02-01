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
import Footer from '../Components/Footer';

function CoinPage() {
const{id}=useParams();
const[error,setError]=useState();
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
    setLoading(true);
    const Data=await getCoinData(id);
    coinObject(setCoinData,Data);
    if(Data){
        const prices=await getCoinPrices(id,days,priceType,setError);
        if(prices.length>0){
            console.log("Wow");
            settingChartData(setChartData,prices);
            setLoading(false);
        }
    }
}
const handleDaysChange = async (event) => {
    setLoading(true)
    setDays(event.target.value);
    const prices=await getCoinPrices(id,event.target.value,priceType,setError);
    if(prices){
        settingChartData(setChartData,prices);
        setLoading(false);
    }
}
  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices= await getCoinPrices(id,days,event.target.value,setError);
    if(prices){
        settingChartData(setChartData,prices);
        setLoading(false);
    }
  };
  return (
    <div style={{height:"100%",
                 width:"100vw"}}>
        {!error &&!loading && coinData.id?(
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
        <Footer/>
        </>
        ):
        <>
        <Loader/>
        <Footer/>
        </>
        }
    </div> 
  )
}

export default CoinPage