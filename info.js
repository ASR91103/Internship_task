import React from "react";
import './info.css';
//import Test from "./test";
import { useNavigate } from "react-router-dom";
import ayodhyalogo from "./ayodhya.jpg";
import iskonlogo from "./iskonlogo.jpg"
function Info() {
    const navigate = useNavigate();
    return (
        <div id="info">
            <button id="lgot" onClick={() => navigate(-1)}>Logout</button>
            <div className="logoblock">
                <div className="row">
                <img id="ayodhya" src={ayodhyalogo} alt="ALogo" /> 
                </div>
                <div className="row">
                <img id="iskonlogo" src={iskonlogo} alt="Logo" />
                </div>
            </div>
            <div className="heading">
                <h1>ISKON BCEC - YATRA 2024</h1>
            </div>
            
            <div className="information">
                <table>
                    <tr>
                        <td><strong>Family Representative Name : </strong></td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td><strong>Age:</strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Member 2:</strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Age:</strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Member 3: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Age:</strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Member 4: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Age: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Member 5: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Age: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Member 6: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Age: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Member 7: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Age: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Member 8: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Age: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Member 9: </strong></td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td><strong>Age: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Contact No:</strong></td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td><strong>counceller Name: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Room's Preference </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Travelling From: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Transport Mode: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Coach Number: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Return Transport Mode: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Return Coach Number: </strong></td>
                        <tr>--</tr>
                    </tr>
                    <tr>
                        <td><strong>Special Request: </strong></td>
                        <tr>--</tr>
                    </tr>
                </table>
            </div>
            <div className="Paymentbtn">
            <button id="pmt" onClick={() => navigate("/Pay")}>Proceed to payment</button>
            
            </div>

        </div>
    )
}

export default Info;