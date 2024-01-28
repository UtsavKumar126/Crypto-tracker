import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "./drawer";
import { useState } from "react";
import SwitchTheme from "./SwitchTheme";
import dashButCss from "../../css/dashbutton.css"

const Navbar=()=>{
    const [checked, setChecked] = useState(true);
    const navigate=useNavigate();
    return(
        <div className="navbar" style={{
            backgroundColor:checked?"var(--black)":"white",
        }}>
            <h1 onClick={()=>navigate("/")} style={{
                color:checked?"white":"black"
            }}>CryptoTracker</h1>
            <div className="links">
            <SwitchTheme checked={checked} setChecked={setChecked}/>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/compare"}>Compare</NavLink>
            <NavLink to={"/watchlist"}>Watchlist</NavLink>
            <button onClick={()=>navigate("/dashboard")} className="dashbutton">DashBoard</button>
            </div>
            <div className="drawer">
                <TemporaryDrawer checked={checked} setChecked={setChecked} />
            </div>
        </div>
    )
}
export default Navbar