import React from "react";

const defaults = {
    "src": "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "cardTitle": "Card Title",
    "alt": "...",
    "cardText": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "buttonText": "Go Somewhere"
}

const Card = (
    {
        src=defaults["src"],
        alt=defaults["alt"],
        cardTitle=defaults["cardTitle"],
        cardText=defaults["cardText"],
        buttonText=defaults["buttonText"]
    }) => (
    <div className="col-4">
            <div className="card" style={{width:"18rem"}}>
              <img
                src={src}
                className="card-img-top"
                alt={alt}
              />
              <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">
                  {cardText}
                </p>
                <a href="#1" className="btn btn-success">{buttonText}</a>
              </div>
            </div>
          </div>
);

export default Card;