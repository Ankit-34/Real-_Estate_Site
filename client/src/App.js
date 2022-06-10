import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signup from "./components/SignUp/index";
import Login from "./components/Login/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About"
import Properties from "./components/Properties/Properties";

function App() {
	const user = localStorage.getItem("token");

	return (
		<div>
		<Navbar/>
		<Routes>
			{user && <Route path="/home" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/home" exact element={<Home />} />
			<Route path="/contact" exact element={<Contact />} />
			<Route path="/about" exact element={<About />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/properties" exact element={<Properties />} />
			<Route path="/" element={<Navigate replace to="/home" />} />
		</Routes>
		<Footer/>
		</div>
	);
}

export default App;