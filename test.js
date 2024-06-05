import React from 'react';
import { useState } from "react";
import "./test.css";
import ayodhyalogo from "./ayodhya.jpg";
import iskonlogo from "./iskonlogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import validationlogin from './Loginvalidation';


function Test() {
    const [values, setValues] = useState({
        loginId: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setError] = useState({})


    const handleSubmit = (event) => {
        event.preventDefault();
        setError(validationlogin(values));
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    return (
        <div>
            <div className="Lblock">
                <img id="ayodhya" src={ayodhyalogo} alt="ALogo" />
                <img id="iskonlogo" src={iskonlogo} alt="Logo" />
            </div>
            <div className="orf">
                <h1>ISKON BCEC - YATRA 2024</h1>
                <h1>Login</h1>
                <p>Please Login to continue</p>
                <form className='fr' method="post" action="/login" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="loginId"><strong>Login Id: </strong></label>
                        <input type="text" name='loginId' onChange={handleInput} placeholder="Enter the login id" />
                        { errors.loginId && <span className='textdanger'>{errors.loginId}</span>}
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="password"><strong>password: </strong></label>
                        <input type="text" name='password' onChange={handleInput} placeholder="Enter the password" />
                        { errors.password && <span className='textdanger'>{errors.password}</span>}
                    </div>
                    <div>
                        <br></br>
                        {/* <button type="submit" className="btn btn-sucess">Login</button> */}
                        <button id="lg" onClick = {() => navigate("/info")}>Login</button>
                    </div>
                    <div>
                        <p>Not Registered? <Link to="/About" className="btn1">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Test;