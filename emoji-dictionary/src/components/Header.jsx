import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>
        {props.left_emoji} {props.heading} {props.right_emoji}
      </h1>
    </div>
  );
}

export default Header;
