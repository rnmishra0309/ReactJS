import React from "react";

const Button = ({title = "Submit"}) => (
    <button className="btn btn-warning btn-lg">{title}</button>
);

export default Button;