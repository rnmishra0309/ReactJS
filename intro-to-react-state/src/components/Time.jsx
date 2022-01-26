import React from "react";

function Time() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  // let toggleInterval = 0;

  // function handleDoubleClick() {
  //   if (toggleInterval === 0) {
  //     var timeInterval = setInterval(() => {setTime(new Date().toLocaleTimeString())}, 1000);
  //     toggleInterval = 1;
  //     console.log(toggleInterval);
  //   } else if (toggleInterval === 1) {
  //     clearInterval(timeInterval);
  //     toggleInterval = 0;
  //     console.log(toggleInterval);
  //   }
  // }

  return (
    <div className="header">
      <h1 onDoubleClick={() => setInterval(() => {setTime(new Date().toLocaleTimeString())}, 1000)}>
        Time: {time}
      </h1>
    </div>
  );
}

export default Time;
