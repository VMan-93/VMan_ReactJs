import { LOGO_URL } from "../Config/constants";
import { useState } from "react";

const HeaderComp = () => {
    
    const [buttonName, setButtonName] = useState("Login");

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/><h1>VMan Foods</h1>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact Us</li>
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