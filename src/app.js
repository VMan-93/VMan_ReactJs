import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./Components/HeaderComp";
import BodyComp from "./Components/BodyComp";

const AppLayoutComp = () => {
    return (
    <div className="app">
        <HeaderComp/>
        <BodyComp/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComp/>);