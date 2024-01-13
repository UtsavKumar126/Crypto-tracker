import React from "react";
import gradient from "../Assets/gradient 1.png"
import mobile from "../Assets/phone 1.png"
import { motion} from "framer-motion";
import { useNavigate } from "react-router-dom";


const HomePage=()=>{
    const navigate=useNavigate();
    return(
        <div className="homePage">
            <div>
                <div className="first">Track Crypto</div>
                <div className="second">Real Time.</div>
                <p style={{
                    color:"#888888",
                    fontWeight:"10px"
                }}>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
                <button className="dashbutton" style={{
                    marginTop:"5vh"
                }} onClick={()=>navigate("/dashboard")}>DashBoard</button>
                <button className="share">Share</button>
            </div>
            <div>
                <img src={gradient} className="image1"/>
                {/* adding animation up/down using framer motion library */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ opacity: 1, y: [0, -5, 5, 0], transition: { duration:3,ease: "easeInOut", repeat:Infinity } }}
                    style={{
                        position: "absolute",
                        height:"85vh",
                        width:"22vw",
                        zIndex: "50",
                        left:"70vw",
                        top:"15vh",
                    }}
                >
                    <motion.img
                    src={mobile}  // Replace with your actual image URL
                    alt="Your Image Alt Text"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                    }}
                    />
                </motion.div>
            </div>
        </div>
    )
}
export default HomePage;