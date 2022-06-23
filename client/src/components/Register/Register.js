import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import "./Register.css"
const Register = () => {

	const navigate = useNavigate();

	const [user, setUser] = useState({
		username: "",
		email: "",
		password: ""
	});

	// Handle Inputs
	const handleInput = (event) => {
		let name = event.target.name;
		let value = event.target.value;

		setUser({ ...user, [name]: value });
	}

	// Handle Submit
	const handleSubmit = async (event) => {
		event.preventDefault();
		const { username, email, password } = user;
		try {
			const res = await fetch('/register', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username, email, password
				})
			})
			console.log(res.status)
			window.alert(res.status)
			if (res.status === 400 || !res) {
				window.alert("Already Used Details")
			} else {
				window.alert("Registered Successfully");
				navigate('/login');
			}
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<>
			<div className="shape_up"></div>

			<div className="register_outer">
				<div className="register_inner">

					<div className="title_SignUp">
						<h1>Sign Up</h1>
					</div>

					<div className="form_div">

						<form onSubmit={handleSubmit} method="POST" className="formContainer">

							<div className="r_name">
								<label >
									Name
								</label>
								<input
									type="text"
									className="input"
									id="name"
									required
									name="username"
									value={user.name}
									onChange={handleInput}
								/>
							</div>

							<div className="r_email">
								<label >Email address</label>
								<input
									type="email"
									className="input"
									id="exampleInputEmail1"
									name="email"
									required
									value={user.email}
									onChange={handleInput}
								/>
							</div>

							<div className="r_password">
								<label>Password</label>
								<input
									type="password"
									className="input"
									id="exampleInputPassword1"
									name="password"
									required
									value={user.password}
									onChange={handleInput}
								/>
							</div>

							<div className="registerD">
							<button type="submit" className="registerB">Register</button>
							</div>
						</form>

						<div className="backToLogin">

							<h4 className="btn-pad">Already have account ?</h4>
							<a href="/Login">Login</a>

						</div>
					</div>
				</div>


			</div>

			<div className="shape_down"></div>

		</>
	)
}

export default Register;