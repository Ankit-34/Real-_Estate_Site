// import React from 'react';
import { NavLink } from 'react-router-dom';
// import "../../App.css";

function Navbar(props) {
    return (
        <>
            <div className="navBar">
                <ul className="list">

                    {/* <li class="item"> */}
                        <NavLink className="nav-link active i" aria-current="page" to="/home">Home</NavLink>
                    {/* </li> */}

                    {/* <li class="item"> */}
                        
                        <NavLink className="nav-link i1" to="/services">
                        Properties
                        <ul className='SubMenu'>
                            <li className='m1'>BUY</li>
                            <li className='m1'>RENT</li>
                        </ul>
                        </NavLink>
                    {/* </li> */}

                    {/* <li class="item"> */}
                        <NavLink className="nav-link i" to="/about">About Us</NavLink>
                    {/* </li> */}

                    {/* <li class="item"> */}
                        <NavLink className="nav-link i" to="/contact" id="con">Contact Us</NavLink>
                    {/* </li> */}

                    {
                        props.auth ?
                            <>
                                {/* <li class="item"> */}
                                    <NavLink className="nav-link i" to="/login">Login</NavLink>
                                {/* </li> */}

                            </> : <>

                            {/* <li class="item"> */}
                                    <NavLink className="nav-link i" to="/logout">Logout</NavLink>
                                {/* </li> */}
                            </>
                    }

                </ul>

            </div>
        </>
    );
}

export default Navbar;