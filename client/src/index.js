import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandPage from './components/Landing_Page/LandingPage';
import Card from './components/Card/Card';

ReactDOM.render(    
    <>
      <LandPage />  

    <div className='Main_header'>
      
      <div className='Header'>
        <div className='text_l1'>
          NEW PROPERTIES
          <br />
          <span className='text_l2'>FOR SELL</span>
          <br />
          <span className='arr'> ➡️ </span>
        </div>
        <div className='parent'>
          <div className='cards'>
            <Card />
            <Card />
            <Card />
          </div>
          <button className='view'>View More</button>
        </div>
      </div>

      <p className='space'></p>
      
      <div className='Header_'>
        <div className='parent_'>
          <div className='cards_'>
            <Card />
            <Card />
            <Card />
          </div>
          <button className='view_'>View More</button>
        </div>
        
        <div className='text_l1_'>
          NEW PROPERTIES
          <br />
          <span className='text_l2_'>FOR RENT</span>
          <br />
          <span className='arr_'> ⬅️ </span>
        </div>
      </div>
    </div>

      {/* <div className='Footer'>
          Footer
      </div> */}
       
    </> , document.getElementById('root'));
