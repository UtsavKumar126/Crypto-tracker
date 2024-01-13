import React from "react";
import { NavLink } from "react-router-dom";
import { Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar=()=>{
    const [checked, setChecked] = React.useState(true);
    const navigate=useNavigate();
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <div className="navbar">
            <h1 onClick={()=>navigate("/")}>CryptoTracker</h1>
            <div className="links">
            <div style={{
                marginRight:"2vw"
            }}>    
              <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>
            </div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/compare"}>Compare</NavLink>
            <button onClick={()=>navigate("/dashboard")} className="dashbutton">DashBoard</button>
            </div>
        </div>
    )
}
export default Navbar