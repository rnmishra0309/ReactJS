import React, { useState } from "react";

function Container() {

  const [heading, setHeading] = useState("Hello");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function handleSubmit(event) {
    setHeading("Welcome, ");
    event.preventDefault();
  }

  function handleReset(event) {
    setHeading("Hello");
    setFullName({
      fName: "",
      lName: ""
    });

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1> {heading} {fullName.fName} {fullName.lName}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="Enter your first name"
          autoComplete="off"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="Enter your last name"
          autoComplete="off"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default Container;


/*

  The simplified version of handleChange() without using the spread operator

    function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === 'lName') {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    });
  }




  Another way of handleChange() without using the anoynmous function in setFullName()


  function handleChange(event) {
    const first = fullName.fName;
    const last = fullName.lName;
    const newValue = event.target.value;
    if (event.target.name === "fName") {
      setFullName({
        fName: newValue,
        lName: last
      });
    } else {
      setFullName({
        fName: first,
        lName: newValue
      });
    }
  }


*/
