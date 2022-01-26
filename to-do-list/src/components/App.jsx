import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleSubmit(event) {
    const { 0: input } = event.target;
    setItemsList((prevValues) => {
      return [...prevValues, input.value];
    });

    setItem("");

    event.preventDefault();
  }

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  function handleDelete(index) {
    setItemsList(prevValues => {
      return prevValues.filter((item, id) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          name="item"
          autoComplete="off"
          onChange={handleChange}
          type="text"
          value={item}
        />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {itemsList.map((item, index) => (
            <ToDoList
              key={index}
              id={index}
              onClear={handleDelete}
              text={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
