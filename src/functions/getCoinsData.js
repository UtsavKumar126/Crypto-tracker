import axios from "axios";
export const getCoinData=(id)=>{
   const Data = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).
        then((response)=>{
            if(response.data){
            return response.data;
            }
        })
        .catch((error)=>{
            console.log(error);
        })

        return Data;
}