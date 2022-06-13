import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    return (
        <>
            <div className="container-fluid nav_bg">

                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav class="navbar navbar-dark navbar-expand-lg">
                            <div class="container-fluid">

                                {/* <a class="navbar-brand" href="#">greenLand.com</a> */}

                                <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>


                                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                        <li class="nav-item">
                                            <NavLink exact className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                                        </li>

                                        <li class="nav-item">
                                            <NavLink exact className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                                        </li>

                                        <li class="nav-item">
                                            <NavLink exact className="nav-link active" aria-current="page" to="/about">About</NavLink>
                                        </li>

                                        <li class="nav-item">
                                            <NavLink exact className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                                        </li>

                                        <button className="btn btn-outline-primary" onClick={handleLogout}>
                                            Logout
                                        </button>

                                    </ul>

                                </div>

                            </div>
                        </nav>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar;