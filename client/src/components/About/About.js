import React from "react";
import './About.css'
import web from "../../Images/about.jpg"

const Home = () => { 
  return(
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">

          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 data">
                  <h1>
                    About US <strong className="brand-name">GreenLand</strong>
                  </h1>
                  <h2 className="my-3">
                    we collect data of different properties for you
                  </h2>
                  <div className="mt-3">
                    <a href="mailto:greenland@gmail.com" className="btn btn-get-started">
                      Mail
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
      </section>
    </>
  );
};

export default Home;