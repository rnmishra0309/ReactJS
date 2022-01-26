import React from "react";

function Display() {

    const [count, increaseCount] = React.useState(0);

    return (
        <div className="container">
        <h1> {count} </h1>
        <button onClick={() => increaseCount(count + 1)}>+</button>
        <button onClick={() => increaseCount(count - 1)}>-</button>
        <button onClick={() => {increaseCount(0)}}>R</button>
        </div>
    );
}

export default Display;
