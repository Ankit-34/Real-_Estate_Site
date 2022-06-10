import React from "react";
import web from "../../Images/Main.png";

const Card = (props) => {
  return (
    <>
            <div className="col-lg-4 col-10 mx-auto">

              <div class="card">
                <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
                <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            </div>
    </>
  );
};

export default Card;