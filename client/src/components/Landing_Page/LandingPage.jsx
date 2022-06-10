import React from 'react';

const LandPage = () => {
    return<>
         <div className='bg_img'>
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


            <div className='Center'>
                <p className='Title'>Your <span className='s'>Dream</span> Home</p>
                <p className='Title1'>Is Waiting For You!</p>
                <button className='Btn'>Explore</button>
            </div>
        </div>

    </>
}

export default LandPage;