import React, { useState } from "react";

function Heading() {

  const [heading] = useState("Counter App");
  const [onMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="header">
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
         style={{"text-decoration": onMouseOver ? "underline" : "none"}}>
        {heading}
      </h1>
    </div>
  );
}

export default Heading;
