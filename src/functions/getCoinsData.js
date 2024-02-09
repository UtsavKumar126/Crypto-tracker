import axios from "axios";
export const getCoinData=(id)=>{
   const Data = axios.get(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-KXeqSKbRE8QpgYSot12mjxgd`).
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