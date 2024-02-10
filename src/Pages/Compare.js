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
import { get100Coins } from '../functions/get100Coins';
import Footer from '../Components/Footer';


const Compare=()=>{
const[crypto1,setCrypto1]=useState("bitcoin");
const[crypto2,setCrypto2]=useState("ethereum");
const[allCoins,setAllCoins]=useState([])
const[days,setDays]=useState(30);
const[crypto1Data,setCrypto1Data]=useState({});
const[crypto2Data,setCrypto2Data]=useState({});
const[loading, setLoading] = useState(true);
const[priceType, setPriceType] = useState('prices');
const[chartData, setChartData] = useState({});
useEffect(()=>{
    getData();
},[]);
async function getData(){
    setLoading(true);
    const coins= await get100Coins();
    if(coins){
        setAllCoins(coins);
        const data1= await getCoinData(crypto1);
        const data2= await getCoinData(crypto2);
        coinObject(setCrypto1Data,data1);
        coinObject(setCrypto2Data,data2);
        if(data1&&data2){
            const prices1=await getCoinPrices(crypto1,days,priceType);
            const prices2=await getCoinPrices(crypto2,days,priceType);
            settingChartData(setChartData,prices1,prices2,crypto1Data.name,crypto2Data.name);
            setLoading(false);
        }
    }
   
}
const handleCoinChange= async (event,isCoin2)=>{
    setLoading(true);
    if(isCoin2){
        setCrypto2(event.target.value);
        const data2=await getCoinData(event.target.value);
        coinObject(setCrypto2Data,data2);
        const price1=await getCoinPrices(crypto1,days,priceType)
        const price2=await getCoinPrices(event.target.value,days,priceType)
        settingChartData(setChartData,price1,price2,crypto1Data.name,event.target.value);
    }
    else{
        setCrypto1(event.target.value);
        const data1=await getCoinData(event.target.value);
        coinObject(setCrypto1Data,data1);
        const price1=await getCoinPrices(event.target.value,days,priceType)
        const price2=await getCoinPrices(crypto2,days,priceType)
        settingChartData(setChartData,price1,price2,event.target.value,crypto2Data.name);
    }
    setLoading(false); 
}

async function handleDaysChange(event){
    setLoading(true)
    setDays(event.target.value);
    console.log("days done");
    const prices1=await getCoinPrices(crypto1,event.target.value,priceType);
    const prices2=await getCoinPrices(crypto2,event.target.value,priceType);
    settingChartData(setChartData,prices1,prices2,crypto1Data.name,crypto2Data.name);
    setLoading(false);
}
const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices1=await getCoinPrices(crypto1,days,event.target.value);
    const prices2=await getCoinPrices(crypto2,days,event.target.value);
    settingChartData(setChartData,prices1,prices2,crypto1Data.name,crypto2Data.name);
    setLoading(false);
};


    return(
    <div>
        {loading?(
        <>   
        <Loader/>
        <Footer/>
        </> 
        ):(
    <>    
    <div className='coin-days-flex'>
        <SelectCoins
        allCoins={allCoins}
        crypto1={crypto1} 
        crypto2={crypto2} 
        handleCoinChange={handleCoinChange}
        days={days}
        handleDaysChange={handleDaysChange}
        />
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
    <Footer/>
    </>
    )
    } 
    </div>  
)
}
export default Compare