import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


const Signup = () => {

	const [data, setData] = useState({
		name: "",
		phone: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();

	//getting value from input field
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	//to send data to backend
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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

			{/* Title */}
			<div className="my-5">
				<h1 className="text-center">Sign Up</h1>
			</div>

			<div >
				<form className={styles.form_container} onSubmit={handleSubmit}>

					<input
						type="text"
						placeholder="Name"
						name="name"
						onChange={handleChange}
						value={data.name}
						required
						className={styles.input}
					/>

					<input
						type="text"
						placeholder="Phone"
						name="phone"
						onChange={handleChange}
						value={data.phone}
						required
						className={styles.input}
					/>

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
						Sing Up
					</button>
				</form>

				<div className="text-center">

					<h5 className="btn-pad">already have account ?</h5>
					<a href="/Login" className="btn btn-outline-primary mt-3">Login</a>

				</div>

			</div>


		</>
	);
};

export default Signup;