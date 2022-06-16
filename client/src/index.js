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
        {/* <div className='back_shape_right'></div> */}

      </div>
    </div>

    <p className='space'></p>
    {/* <p className='space'></p> */}

    <div className='Footer'>
      <div className='box'></div>
      <div className='footer_image'>
        <img src='https://media.istockphoto.com/photos/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset-picture-id1283532082?b=1&k=20&m=1283532082&s=170667a&w=0&h=KxQ3cfMs-Xi7FL2TXfrgFbi9pwtBOdjSEc4-ufAeVlo=' alt='home_photo'/>
      </div>
    </div>
    
       
    </> , document.getElementById('root'));
