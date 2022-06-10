import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (

		<>

			<div className="my-5">
				<h1 className="text-center">Login</h1>
			</div>

			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto login-style">


								<form className={styles.form_container} onSubmit={handleSubmit}>
									<input
										type="email"
										placeholder="Email"
										name="email"
										onChange={handleChange}
										value={data.email}
										required
										className={styles.input}
									/>
									<input
										type="password"
										placeholder="Password"
										name="password"
										onChange={handleChange}
										value={data.password}
										required
										className={styles.input}
									/>
									{error && <div className={styles.error_msg}>{error}</div>}
									<button type="submit" className={styles.green_btn}>
										Sing In
									</button>
								</form>

								<div className="text-center">
									<h5 className="btn-pad">Don't have account ?</h5>
									<a href="/SignUp" className="btn btn-outline-primary mt-3">SignUp</a>
								</div>

					</div>
				</div>
			</div>



		</>


	);
};

export default Login;