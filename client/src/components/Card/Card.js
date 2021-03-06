import React from 'react';
import bed from "../../icons/bed.png"
import bath from "../../icons/bath.png"
import city_building from "../../icons/city-buildings.png"
import surface from "../../icons/surface.png"


const Card = () => {
    return<>
        <div class="main">
            <div class="img">
                <img src="https://cdn.britannica.com/05/157305-004-53D5D212.jpg" alt="" />
                {/* <button className='view_more'> View More </button> */}
            </div>

            <div class="container">
                <p class="add1">Lorem ipsum, dolor sit amet </p>
                <p class="add2">Delhi, India</p>
                <p class="price">10,000💰</p>
                
                <hr />
                <div class="data">
                    <div class="d">
                        <img src={bed} alt="" />
                        <p class="t">Bed</p>
                        <p class="digit">2</p>
                    </div>
                    <div class="d">
                        <img src={bath} alt="" />
                        <p class="t">Bath</p>
                        <p class="digit">2</p>
                    </div>
                    <div class="d">
                        <img src={city_building} alt="" />
                        <p class="t">Levels</p>
                        <p class="digit">2</p>
                    </div>
                    <div class="d">
                        <img src={surface} alt="" />
                        <p class="t">Sqft</p>
                        <p class="digit">2</p>
                    </div>
                </div>
                {/* <button className='view_more_2'> View More </button> */}

            </div>
        </div>
    </>
}

export default Card;