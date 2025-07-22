import { LOGO_URL } from "../Config/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComp = () => {
    
    const [buttonName, setButtonName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/><h1>VMan Foods</h1>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    {onlineStatus? "🟢" : "🔴"}
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <button className="login-btn"
                onClick={ () => {
                 buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");                    
                }}
                >{buttonName}</button>
            </ul>
        </div>
    </div>
    )
}

export default HeaderComp;