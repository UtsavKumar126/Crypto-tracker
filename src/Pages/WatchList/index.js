import React, { useContext, useState,useEffect } from 'react'
import CoinContext from '../../Context/CoinContext';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../../Components/DashBoard/Grid';
import List from '../../Components/DashBoard/List';
import axios from 'axios';
import DashButtoncss from "../../css/dashbutton.css"
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import { get100Coins } from '../../functions/get100Coins';

function WatchList() {
  const {watchList}=useContext(CoinContext);
  const[coins,setCoins]=useState([]);
  const[loading,setLoading]=useState(true);
  const navigate=useNavigate();
  useEffect(()=>{
    getData();
  },[])
  const getData=async ()=>{
    const allCoins=await get100Coins();
    if(allCoins){
      setCoins(allCoins);
      setLoading(false);
    }
  }
  const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const style={
      color:"var(--white)",
      fontSize:"1.2rem",
      fontWeight:"600",
      textTransform:"capitalize"
    }
    const theme=createTheme({
      palette: {
        primary: {
          main: '#3A80E9',
        },
      } 
    });

  return (
    watchList.length>0?(
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <div>
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth" >
              <Tab label="Grid" value="1" sx={style}/>
              <Tab label="List" value="2" sx={style}/>
            </TabList>
          </div>
          <TabPanel value="1">
             <div className='grid-view fullheight'>
              {coins.map((coin,i)=>(
                (watchList.includes(coin.name))?
                <Grid coin={coin} key={i}/>:""
              ))}
             </div>
          </TabPanel>
          <TabPanel value="2">
          <table className='list fullheight'>
              {coins.map((coin,i)=>(
                (watchList.includes(coin.name))?
                <List coin={coin} key={i}/>:
                ""
              ))}
          </table>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
  ):(
    <div className='watchList'>
      <h1>No Data Found</h1>
      <button className='movebutton' onClick={()=>navigate("/dashboard")}>Move To DashBoard</button>
    </div>
  )
  )
}
export default WatchList;