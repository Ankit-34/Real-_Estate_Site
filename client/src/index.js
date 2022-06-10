import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandPage from './components/Landing_Page/LandingPage';
import Card from './components/Card/Card'

ReactDOM.render(    
    <>
      <LandPage />  

      <div className='Header'>
        <p className='text_l1'>NEW PROPERTIES</p>
        <p className='text_l2'>FOR SELL</p>
        <div className='cards'>
          <Card />
          <Card />
          <Card />
        </div>
        <button className='view'>View More</button>
      </div>
      <p className='space'></p>
      <div className='Header'>
        <p className='text_l1'>NEW PROPERTIES</p>
        <p className='text_l2'>FOR RENT</p>
        <div className='cards'>
          <Card />
          <Card />
          <Card />
        </div>
        <button className='view'>View More</button>
      </div>

      <div className='Footer'>
          Footer
      </div>
       
    </> , document.getElementById('root'));
