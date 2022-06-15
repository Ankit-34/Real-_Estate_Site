import React from 'react';

const Card = () => {
    return<>
        <div class="main">
            <div class="img">
                <img src="https://cdn.britannica.com/05/157305-004-53D5D212.jpg" alt="" />
            </div>

            
            <div class="container">
                <p class="add1">Lorem ipsum, dolor sit amet </p>
                <p class="add2">Delhi, India</p>
                <p class="price">10,000💰</p>
                
                <hr />
                <div class="data">
                    <div class="d">
                        <img src={require('../../Icon/icons8-empty-bed-50.png')} alt="" />
                        <p class="t">Bed</p>
                        <p class="digit">2</p>
                    </div>
                    <div class="d">
                        <img src={require('../../Icon/icons8-bath-48.png')} alt="" />
                        <p class="t">Bath</p>
                        <p class="digit">2</p>
                    </div>
                    <div class="d">
                        <img src={require('../../Icon/icons8-city-buildings-48.png')} alt="" />
                        <p class="t">Levels</p>
                        <p class="digit">2</p>
                    </div>
                    <div class="d">
                        <img src={require('../../Icon/icons8-surface-64.png')} alt="" />
                        <p class="t">Sqft</p>
                        <p class="digit">2</p>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default Card;