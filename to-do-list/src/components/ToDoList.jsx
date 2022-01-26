import React, { useState } from "react";

function ToDoList(props) {
  const [liItem] = useState(props.text);
  const [textStyle, setTextStyle] = useState({ textDecoration: "none" });

  function handleClick() {
    setTextStyle((prevState) => {
      if (prevState.textDecoration === "none") {
        return { textDecoration: "line-through" };
      } else if (prevState.textDecoration === "line-through") {
        return { textDecoration: "none" };
      }
    });
  }

  return (
    <li
      id={props.id}
      onDoubleClick={() => {
          props.onClear(props.id);
      }}
      onClick={handleClick}
      style={textStyle}
    >
      {liItem}
    </li>
  );
}

export default ToDoList;
