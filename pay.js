import React from "react";
import './pay.css';
// import Login from "./login";
//import Test from "./test";
import { useNavigate } from "react-router-dom";
import iskonlogo from "./iskonlogo.jpg";
import ayodhyalogo from "./ayodhya.jpg";
function Pay() {
    const navigate = useNavigate();
    return (
        <div className="payment">
            <div className="logoblock">
            <div className="row">
            <img id="ayodhya" src={ayodhyalogo} alt="ALogo" />
            </div>
            <div id="row">
                <img id="iskonlogo" src={iskonlogo} alt="Logo" />
            </div>
            </div>
            <div className="heading">
                <h1>ISKON BCEC - YATRA 2024</h1>
            </div>
            <div id="qr">
                {/* <img id="qrimg" src={qrimg} alt="QR image" /> */}
                
            </div>
        </div>       
    )
}

export default Pay;