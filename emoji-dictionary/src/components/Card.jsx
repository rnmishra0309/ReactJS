import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div>
        <img
          className="flag-image"
          src={props.src}
          alt={props.country}
        />
      </div>
      <div>
        <h1 className={props.className}><b><u>{props.country}</u></b></h1>
      </div>
    </div>
  );
}

export default Card;
