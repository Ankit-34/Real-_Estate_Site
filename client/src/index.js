import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandPage from './components/Landing_Page/LandingPage';
import Main from './components/Main/Main';
import FeedBack from './components/Feedback/FeedBack';

ReactDOM.render(    
    <>
      <LandPage />  
        <div className='back_shape_right'></div>
        <Main 
          line1="FOR SELL"
          c1="l1"
          c2="l1_"
          c3="v1"
        />
        <div className='back_shape_left'></div>
        <Main 
          line1="FOR RENT"
          c1="l2"
          c2="l2_"
          c3="v2"
        />

      <p className='space'></p>

    <div className='carousel_outer'>
    <p className='feedback'> What our clients says... </p>
      <div className='carousel_inner'>
        
        <FeedBack name="Username 1" />
        <FeedBack name="Username 2" />
        <FeedBack name="Username 3" />
        <div className='back_shape_right'></div>

      </div>
    </div>
    
       
    </> , document.getElementById('root'));
