import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {

	const navigate = useNavigate();

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	// Handle Input
	const handleChange = (event) => {
		let name = event.target.name
		let value = event.target.value

		setUser({ ...user, [name]: value })
	}

	// Handle Login
	const handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = user;
		try {
			const res = await fetch('/login', {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email, password
				})
			});

			if (res.status === 400 || !res) {
				window.alert("Invalid Credentials")
			} else {
				window.alert("Login Successfull");
				window.location.reload();
				navigate('/');
			}

		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<div className="my-5">
				<h1 className="text-center">Login</h1>
			</div>

			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto login-style">
						<form onSubmit={handleSubmit} className="form_container">
							<div class="mb-3">

								<label for="exampleInputEmail1" class="form-label">
									Email address
								</label>

								<input
									type="email"
									className="input"
									id="exampleInputEmail1"
									name="email"
									required
									value={user.email}
									onChange={handleChange}
								/>

							</div>

							<div class="mb-3">

								<label for="exampleInputPassword1" class="form-label">Password</label>

								<input
									type="password"
									className="input"
									id="exampleInputPassword1"
									name="password"
									required
									value={user.password}
									onChange={handleChange}
								/>

							</div>

							<button type="submit" class="btn btn-dark">
								Login
							</button>

						</form>

						<div className="">
							<h5 className="btn-pad">Don't have account ?</h5>
							<NavLink className="btn btn-dark mt-3" aria-current="page" to="/register">Register</NavLink>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Login;