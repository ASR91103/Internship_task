import { useState } from "react";
import React from "react";
//import axios from "axios";
import './about.css';
import iskonlogo from "./iskonlogo.jpg";
import { useNavigate } from "react-router-dom";
import ayodhyalogo from "./ayodhya.jpg";



export default function About() {
	const [members, setMembers] = useState([]);
	const [values, newValues] = useState({
		name: '',
		age: '',
		password: ''
	});
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [password, setPassword] = useState("");
	const [sreq, setsreq] = useState("");
	const [returnTB, setreturnTB] = useState("");
	const [TB, setTB] = useState("");

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleAge = (e) => {
		setAge(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};
	const handleTB = (e) => {
		setTB(e.target.value);
		setSubmitted(false);
	};
	const handlereturnTB = (e) => {
		setreturnTB(e.target.value);
		setSubmitted(false);
	};
	const handlesreq = (e) => {
		setsreq(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission



	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? "" : "none",
				}}
			>
				<h1>User {name} successfully registered!!</h1>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? "" : "none",
				}}
			>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || age === "" || password === "" || sreq === "" || returnTB === "" || TB === "") {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};
	return (
		<div className="lo">
			<div className="logoblock">
				<div className="row">
					<img id="ayodhya" src={ayodhyalogo} alt="ALogo" />
				</div>
				<div id="row">
					<img id="iskonlogo" src={iskonlogo} alt="Logo" />
				</div>
			</div>
			<button id="lgot" onClick={() => navigate(-1)}>Logout</button>
			<div className="form">
				<div className="user-res">
					<h1>ISKON BCEC - YATRA 2024</h1>
				</div>

				{/* Calling to the methods */}
				<div className="messages">
					{errorMessage()}
					{successMessage()}
				</div>

				<form>
					{/* Labels and inputs for form data */}
					<div className="formtemplate">
						<table>
							<tr>
								<td>
									<label className="label"><b>Family Representative Name:*</b> </label>
									<input
										placeholder="Enter the Full Name"
										onChange={handleName}
										className="input"
										value={name}
										type="text"
									/>
								</td>
								<td>
									<label className="label"><b>Age*</b></label>
									<input
										placeholder="Enter the Age"
										onChange={handleAge}
										className="input"
										value={age}
										type="age"
									/>

								</td>
								<td>
									<label className="label"> <b>Phone Number*</b></label>
									<input
										placeholder="Enter the (10 digit) Phone Number"
										onChange={handlePassword}
										className="input"
										value={password}
										type="password"
									/>

								</td>
							</tr>
							{/* </tr>
							<button onClick={addMember}>Add Member</button>
							<ul>
								{members.map((member, index) => (
									<li key={index}>
										{`Name: ${member.name}, Age: ${member.age}, Gender: ${member.gender}`}
									</li>
								))}
							</ul>
							<tr> */}
							<tr>
								<td>
									<label className="label"><b>Name of your Counsellor/ Host/Weekly-Satsang Coordinator:*</b> </label>
									<select id="counceller">
										<option value="Select from" selected="selected">- Select from -</option>
										<option value="Kanai Thakur Das">Kanai Thakur Das</option>
										<option value="Gaur Lila Das">Gaur Lila Das</option>
										<option value="Natwar Gauranga Das / Anandini Kishori Devi Dasi">Natwar Gauranga Das / Anandini Kishori Devi Dasi</option>
										<option value="Ajit Madhav Das / Malini Radhika Devi Dasi">Ajit Madhav Das / Malini Radhika Devi Dasi</option>
										<option value="Premdham Das / Madhurya Dham Devi Dasi">Premdham Das / Madhurya Dham Devi Dasi</option>
										<option value="Anupam Agrawal / Damodar Vilasini Devi Dasi">Anupam Agrawal / Damodar Vilasini Devi Dasi</option>
										<option value="Balram Nitai Das / Shyamla Gopi Devi Dasi">Balram Nitai Das / Shyamla Gopi Devi Dasi</option>
										<option value="Sujay Govinda Das / Chitralekha Sakhi Devi Dasi">Sujay Govinda Das / Chitralekha Sakhi Devi Dasi</option>
										<option value="Jasbir Chauhan / Devika Chauhan">Jasbir Chauhan / Devika Chauhan</option>
										<option value="Sri Baldev Das / Dipti Boradia">Sri Baldev Das / Dipti Boradia</option>
										<option value="Jai Gahlot / Shweta Gahlot">Jai Gahlot / Shweta Gahlot</option>
										<option value="Pransakhi Devi Dasi">Pransakhi Devi Dasi</option>
										<option value="Namrata Rajdev">Namrata Rajdev</option>
										<option value="Sushil Gauranga Das">Sushil Gauranga Das</option>
										<option value="Rakesh Agrawal">Rakesh Agrawal</option>
										<option value="Other">Other</option>
									</select>
								</td>
								<td>
									<label className="label"><b>Room's Preference:*</b> </label>
									<select id="room">
										<option value="Select from" selected="selected">- Select from -</option>
										<option value="Non AC Room">Non AC Room</option>
										<option value="AC Room">AC Room</option>
									</select>
								</td>
								<td>
									<label className="label"><b>Travelling from which city:*</b> </label>
									<select id="city" >
										<option value="Select from" selected="selected">- Select from -</option>
										<option value="Pune">Pune</option>
										<option value="New Delhi">New Delhi</option>
										<option value="Hyderabad ">Hyderabad </option>
										<option value="Other">Other</option>
									</select>
								</td>
							</tr>

							<tr>
								<td>
									<label className="label"><b>Train Coach & Berth Number:*</b> </label><input placeholder="Type if any special request otherwise NA"
										onChange={handleTB}
										className="input"
										value={TB}
										type="text"
									/>
								</td>
								<td>
									<label className="label"><b>Return Transport Mode:*</b> </label>
									<select id="rtmode" >
										<option value="Select from" selected="selected">- Select from -</option>
										<option value="Train # 22102 (MDU LTT Exp) 10-02-2022">Train # 22102 (MDU LTT Exp) 10-02-2022  </option>
										<option value="Train # 16354 (NCJ KCG Exp) 11-02-2022">Train # 16354 (NCJ KCG Exp) 11-02-2022</option>
										<option value="None of the above">None of the above</option>
									</select>

								</td>
								<td>
									<label className="label"><b>Retrun Transport & Berth Number:</b></label>
									<input
										placeholder="Type return train coach Number"
										onChange={handlereturnTB}
										className="input"
										value={returnTB}
										type="text"
									/>
								</td>
							</tr>
							<tr>
								<td>

								</td>
								<td>
									<label className="label"><b>Special Request:</b> </label><input placeholder="Type if any special request otherwise NA"
										onChange={handlesreq}
										className="input"
										value={sreq}
										type="text"
									/>
								</td>
								<td>

								</td>
							</tr>
						</table>



						<br></br>
						<br></br>

						<button onClick={handleSubmit} className="btn" type="submit">Register</button>
					</div>
				</form>
			</div>
		</div>


	);
}