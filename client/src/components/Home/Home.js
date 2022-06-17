import React from "react";
import './Home.css'
import web from "../../Images/Main.png"
const Home = () => {
    return (
        <>
            {/* <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">

                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 data">
                                    <h1>
                                        Buy new Properties with <strong className="brand-name">GreenLand</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are here to help you find your Properties
                                    </h2>
                                    <div className="mt-3">
                                        <a href="/properties" className="btn btn-get-started">
                                            Properties
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 header-image">
                                    <img src={web} class="img-fluid animated" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className='bg_img'>

                <div className='Center'>
                    <p className='Title'>Your <span className='s'>Dream</span> Home</p>
                    <p className='Title1'>Is Waiting For You!</p>
                    <button className='Btn'>Explore</button>
                </div>
            </div>

        </>
    );
};

export default Home;