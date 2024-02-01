import React, { useEffect, useState } from 'react'
import TabsComponent from '../Components/DashBoard/TabsComponent'
import dashboard from "../css/dashboard.css"
import axios from 'axios';
import Search from '../Components/DashBoard/Search';
import PaginationControlled from '../Components/DashBoard/Pagination';
import Loader from '../Components/Loader';
import { get100Coins } from '../functions/get100Coins';
import Footer from '../Components/Footer';

const Dashboard = ()=> {
  const [coins,setCoins]=useState([]);
  const[paginatedCoins,setPaginatedCoins]=useState([]);
  const[search,setSearch]=useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const handleChange = (event, value) => {
    setPage(value);
    var prevIndex= (value-1)*10;
    setPaginatedCoins(coins.slice(prevIndex,prevIndex+10))
  };


  var searchData= coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())||
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(()=>{
    getData();
  },[])
  const getData = async ()=>{
    const myCoins=await get100Coins();
    if(myCoins){
    setCoins(myCoins);
    setPaginatedCoins(myCoins.slice(0,10));
    setLoading(false);
    }
    else{
      setLoading(false);
    }
  }
  return (
    <>{loading?(
      <>
       <Loader/>
       <Footer/>
      </>
    ):(
      <>
      <div className='dashboard'>
        <Search search={search} setSearch={setSearch}/>
        <TabsComponent coins={search? searchData:paginatedCoins} setSearch={setSearch}/>
        {!search &&<PaginationControlled page={page} handleChange={handleChange}/>}
      </div>
      <Footer/>
      </>
      )}
    </>
    
  )
}

export default Dashboard