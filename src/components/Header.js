import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() =>{

    const [btnNameReact,setBtnNameReact]= useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="sticky top-0 z-50 flex justify-between shadow-lg bg-white">
            <div className="logo-container">
                <img className="w-20 ml-5" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 hover:text-orange-400">
                        Online Status: {onlineStatus ? "✅":"🔴"}
                    </li>
                    <li className="px-4 hover:text-orange-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 hover:text-orange-400">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4 hover:text-orange-400">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4 hover:text-orange-400">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 hover:text-orange-400">Cart</li>
                    <button className="login px-4 hover:text-orange-400" 
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