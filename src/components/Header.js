import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() =>{

    const [btnNameReact,setBtnNameReact]= useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "✅":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" 
                        onClick={()=>{ 
                            btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;