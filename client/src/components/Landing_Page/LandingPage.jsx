import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'

const LandPage = () => {
    return<>
         <div className='bg_img'>
            
            <Navbar />

            <div className='Center'>
                <p className='Title'>Your <span className='s'>Dream</span> Home</p>
                <p className='Title1'>Is Waiting For You!</p>
                <button className='Btn'>Explore</button>
            </div>
        </div>
    </>
}

export default LandPage;