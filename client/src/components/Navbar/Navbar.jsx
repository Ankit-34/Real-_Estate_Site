import React from 'react';

const Navbar = () => {
    return<>
        <div className='navBar'>
            <ul className='list'>
                <li className='item'>Home</li>
                <li className='item'>Properties</li>
                <li className='item'>Contact Us</li>
                <li className='item'>About Us</li>
                <li className='item'>Login</li>
            </ul>
            
            <div className='Logo'>Logo</div>
        </div>
    </>
}

export default Navbar;