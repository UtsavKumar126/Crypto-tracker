import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "./drawer";
import { useState } from "react";
import SwitchTheme from "./SwitchTheme";
import dashButCss from "../../css/dashbutton.css"

const Navbar=()=>{
    const navigate=useNavigate();
    const[checked,setChecked]=useState(localStorage.getItem("theme")==="dark"?true:false);
    return(
        <div className="navbar">
            <h1 onClick={()=>navigate("/")}>CryptoTracker</h1>
            <div className="links">
            <SwitchTheme checked={checked} setChecked={setChecked}/>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/compare"}>Compare</NavLink>
            <NavLink to={"/watchlist"}>Watchlist</NavLink>
            <button onClick={()=>navigate("/dashboard")} className="dashbutton">DashBoard</button>
            </div>
            <div className="drawer">
                <TemporaryDrawer/>
            </div>
        </div>
    )
}
export default Navbar