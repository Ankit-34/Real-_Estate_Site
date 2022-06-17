// import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../App.css"

function Navbar(props) {
    return (
        <>
            <div className='navBar'>
                <ul class="list">

                    <li class="item">
                        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>

                    <li class="item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>

                    <li class="item">
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>

                    <li class="item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>

                    {
                        props.auth ?
                            <>
                                <li class="item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>

                            </> : <>

                            <li class="item">
                                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                </li>
                            </>
                    }

                </ul>

            </div>
        </>
    );
}

export default Navbar;