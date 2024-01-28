import React, { useEffect } from 'react';
import { useState } from 'react';
import SelectCoins from "../Components/Compare/SelectCoins"
import SelectDays from '../Components/Coin/SelectDays';
import { coinObject } from '../functions/convertObject';
import { getCoinPrices } from '../functions/getCoinPrices';
import { getCoinData } from '../functions/getCoinsData';
import Loader from '../Components/Loader';
import List from '../Components/DashBoard/List';
import CoinInfo from '../Components/Coin/CoinInfo';
import { settingChartData } from '../functions/settingChartData';
import LineChart from '../Components/Coin/Chart-Line';
import TogglePrice from '../Components/Coin/Toggle-buttons';


const Compare=()=>{
const[crypto1,setCrypto1]=useState("bitcoin");
const[crypto2,setCrypto2]=useState("ethereum");
const[days,setDays]=useState(30);
const[crypto1Data,setCrypto1Data]=useState({});
const[crypto2Data,setCrypto2Data]=useState({});
const[loading, setLoading] = useState(true);
const[priceType, setPriceType] = useState('prices');
const[chartData, setChartData] = useState({});
async function handleDaysChange(event){
    setLoading(true)
    setDays(event.target.value);
    console.log("days done");
    const prices1=await getCoinPrices(crypto1,event.target.value,priceType);
    if(prices1.length > 0){
        const prices2=await getCoinPrices(crypto2,event.target.value,priceType);
        if(prices1.length>0&&prices2.length > 0){
            settingChartData(setChartData,prices1,prices2);
            setLoading(false);
            console.log("days done");
        }
    }
}
const handlePriceTypeChange = async (event,newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices1=await getCoinPrices(crypto1,days,newType);
    if(prices1.length>0){
    const prices2=await getCoinPrices(crypto2,days,newType);
        if(prices1.length>0&&prices2.length>0){
            settingChartData(setChartData,prices1,prices2);
            setLoading(false);
        }
    }
};
useEffect(()=>{
    getData();
},[])
async function getData(){
    setLoading(true);
    try{
    const Data1=await getCoinData(crypto1);
    if(Data1){
        const Data2=await getCoinData(crypto2);
        coinObject(setCrypto1Data,Data1); 
        if(Data2){
            coinObject(setCrypto2Data,Data2);
            const prices1=await getCoinPrices(crypto1,days,priceType);
            if(prices1.length > 0){
            const prices2=await getCoinPrices(crypto2,days,priceType);
                if(prices1.length>0&&prices2.length > 0){
                    settingChartData(setChartData,prices1,prices2);
                    setLoading(false);
                }
            }
        }
    }
}
catch(error){
    console.log(error);
    setLoading(false);
}
}
const handleCoinChange= async (event,isCoin2)=>{
    setLoading(true);
    if(isCoin2){
        setCrypto2(event.target.value);
        const Data=await getCoinData(event.target.value);
        coinObject(setCrypto2Data,Data);
        if(Data.length>0){
        const prices1=await getCoinPrices(crypto1,days,priceType);
            if(prices1.length > 0){
            const prices2=await getCoinPrices(crypto2,days,priceType);
                if(prices1.length>0&&prices2.length>0){
                    console.log("Wow",prices1,prices2);
                    setLoading(false);
                }
            }
        }
    }
    else{
        setCrypto1(event.target.value);
        const Data=await getCoinData(event.target.value);
        coinObject(setCrypto1Data,Data);
    }
    
}

    return(
    <div>
        {loading?(<Loader/>):(
    <>    
    <div className='coin-days-flex'>
        <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange}/>
        <SelectDays days={days} handleDaysChange={handleDaysChange} nopTag={true}/>
    </div>
    <div className='grey-wrapper short-padding'>
        <List coin={crypto1Data}/>
    </div> 
    <div className='grey-wrapper short-padding'>
        <List coin={crypto2Data}/>
    </div>
    <div className='grey-wrapper'>
        <TogglePrice priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
        <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
    </div>
    <CoinInfo title={crypto1Data.name} desc={crypto1Data.desc}/>
    <CoinInfo title={crypto2Data.name} desc={crypto2Data.desc}/>
    </>
    )
    } 
    </div>  
)
}
export default Compare