import React from "react";
import User from "../../Images/person.jpg"
import Card from "../Card/Card";
import "../../App.css"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Reviews = () => {
    return (
        <div>
            <div className='Main_header'>
                <div className='Header'>
                    <div className='text_l1' id='here'>
                        NEW PROPERTIES
                        <br />
                        <span className='text_l2'>FOR SELL</span>
                        <br />
                        {/* <span className='arr'> ➡️ </span> */}
                    </div>
                    <div className='parent'>
                        <div className='cards'>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <button className='view'>View More</button>
                        <div className='back_shape_right'></div>
                    </div>
                </div>

                <p className='space'></p>

                <div className='Header_'>
                    <div className='text_l1_'>
                        NEW PROPERTIES
                        <br />
                        <span className='text_l2_'>FOR RENT</span>
                        <br />
                        {/* <span className='arr_'> ⬅️ </span> */}
                    </div>
                    <div className='parent_'>
                        <div className='cards_'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <button className='view_'>View More</button>
                        <div className='back_shape_left'></div>
                    </div>

                    {/* <div className='text_l1_'>
          NEW PROPERTIES
          <br />
          <span className='text_l2_'>FOR RENT</span>
          <br />
          <span className='arr_'> ⬅️ </span>
        </div> */}
                </div>
            </div>


            <p className='space'></p>

            <div className='carousel_outer'>
                <p className='feedback'> What our clients says... </p>
                <div className='carousel_inner'>
                    <div className='first_rev'>
                        <img className='pic' src={User} alt='' />
                        <p className='para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                            voluptas blanditiis! Asperiores autem consequuntur voluptates enim
                            doloremque alias unde iure incidunt quos quod, non, illum suscipit
                            labore officia culpa nobis.
                            <br />
                            <p className='user_name'> User Name </p>
                        </p>
                    </div>
                    {/* <div className='parent_rev'> */}
                    <div className='second_rev'>
                        <img className='pic' src={User} alt='' />
                        <p className='para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                            voluptas blanditiis! Asperiores autem consequuntur voluptates enim
                            doloremque alias unde iure incidunt quos quod, non, illum suscipit
                            labore officia culpa nobis.
                            <br />
                            <p className='user_name'> User Name </p>
                        </p>
                    </div>
                    <div className='thired_rev'>
                        <img className='pic' src={User} alt='' />
                        <p className='para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                            voluptas blanditiis! Asperiores autem consequuntur voluptates enim
                            doloremque alias unde iure incidunt quos quod, non, illum suscipit
                            labore officia culpa nobis.
                            <br />
                            <p className='user_name'> User Name </p>
                        </p>
                    </div>
                    {/* </div> */}
                    {/* <div className='fourth_rev'>
          <img className='pic' src={User} alt=''/>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            voluptas blanditiis! Asperiores autem consequuntur voluptates enim
            doloremque alias unde iure incidunt quos quod, non, illum suscipit
            labore officia culpa nobis.
            <br />
            <p className='user_name'> User Name </p>
          </p>
        </div> */}
                    <div className='back_shape_right'></div>

                </div>
            </div>


            <div className='footer'>

            </div>


        </div>
    )
}

export default Reviews;