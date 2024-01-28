import CoinContext from "./CoinContext";
import { useState } from "react";
import { toast } from "react-toastify";
const CoinProvider=(props)=>{
    const[watchList,SetWatchList]=useState(JSON.parse(localStorage.getItem('watchlist')) || []);

    const addToWatchList=(coin)=>{
        if(!watchList.includes(coin)){
        SetWatchList([...watchList,coin]);
        localStorage.setItem('watchlist',JSON.stringify([...watchList,coin]));
        }
    }
    const removeFromWatchList=(coin)=>{
        SetWatchList(watchList.filter(item=>item!==coin));
        localStorage.setItem('watchlist',JSON.stringify([...watchList,coin].filter(item=>item!==coin)));
    }
    const notify = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    return(
        <CoinContext.Provider value={{
            watchList:watchList,
            addToWatchList:addToWatchList,
            removeFromWatchList:removeFromWatchList,
            notify:notify
        }}>
            {props.children}
        </CoinContext.Provider>
    )

}
export default CoinProvider