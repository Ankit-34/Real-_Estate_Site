import React from "react";
import User from '../../Images/pexels-ali-pazani-2777898.jpg';

const FeedBack = (props) => {
    return <>
        <div className='first_rev'>
          <div><img  className='pic' src={User} alt='' /></div>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            voluptas blanditiis! Asperiores autem consequuntur voluptates enim
            doloremque alias unde iure incidunt quos quod, non
            <br />
            <p className='user_name'> {props.name} </p>
          </p>
        </div>
    </>
}

export default FeedBack;