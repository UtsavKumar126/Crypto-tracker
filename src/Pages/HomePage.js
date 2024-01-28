import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import gradient from "../Assets/gradient 1.png"
import phone from "../Assets/phone 1.png"
import dashbutCss from "../css/dashbutton.css"
import shareButCss from "../css/shareButton.css"
import homepageCss from "../css/homepage.css"
import { motion } from "framer-motion";
import CoinContext from "../Context/CoinContext"
import { RWebShare } from "react-web-share";


const HomePage=()=>{
    const navigate=useNavigate();
    const{name}=useContext(CoinContext);
    return(
        <div className="homePage">
            <div className="left-comp">
                <motion.h1 className="heading1"
                initial={{opacity :0 ,y: 50}}
                animate={{opacity :1 ,y: 0}}
                transition={{duration:0.5}} 
                >Track Crypto</motion.h1>
                <motion.h1 className="heading2"
                initial={{opacity :0 ,y: 50}}
                animate={{opacity :1 ,y: 0}}
                transition={{duration:0.5,delay:0.5}} 
                >Real Time.</motion.h1>
                <motion.p className="text"
                initial={{opacity :0 ,y: 50}}
                animate={{opacity :1 ,y: 0}}
                transition={{duration:0.5,delay:1}} 
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div className="buttons"
                initial={{opacity :0 ,x: 50}}
                animate={{opacity :1 ,x: 0}}
                transition={{duration:0.5,delay:1.5}} 
                >
                    <button className="dashbutton" onClick={()=>navigate("/dashboard")}>DashBoard</button>
                    <RWebShare
                    data={{
                        text: "Share Crypto Tracker",
                        url: "https://crypto-tracker-chi-six.vercel.app/",
                        title: "Crypto Tracker",
                    }}
                    onClick={() =>
                        console.log("shared successfully!")
                    }
                >
                <button className="share">Share</button>
            </RWebShare>
        </motion.div>
            </div>
            <div className="container-phone">
                <img src={gradient}alt="grad" className="gradient"/>
                <motion.img src={phone} alt="phone" className="phone"
                    initial={{y:-15}}
                    animate={{y:15}}
                    transition={{
                        type: "smooth",
                        repeatType:"mirror",
                        duration:2,
                        repeat:Infinity,
                    }}
                />
        </div>
    </div>
    )
}
export default HomePage;