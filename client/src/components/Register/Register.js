import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Register.css"
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
		<div>
			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">

						<form onSubmit={handleSubmit} method="POST" className="form_container">

							<div class="mb-3">
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

							<div class="mb-3">
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

							<div class="mb-3">
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

							<button type="submit" class="btn btn-dark">Register</button>
						</form>

						<div className="text-center">

							<h5 className="btn-pad">already have account ?</h5>
							<a href="/Login" className="btn btn-outline-primary mt-3">Login</a>

						</div>
					</div>
				</div>


			</div>
		</div>
	)
}

export default Register;