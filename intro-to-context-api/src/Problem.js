import React, { useState } from "react";

const GrandChild = (props) => {
    return (
      <div>
        <h3>Brand Name: {props.name}</h3>
      </div>
    );
  };
  
  const Child = (props) => {
    return (
      <div>
        <h2>Child: </h2>
        <GrandChild name={props.name} />
      </div>
    );
  };
  
  const App = () => {
    const [name] = useState("Amazon");
  
    return (
      <div>
        <h1>Hello</h1>
        <Child name={name} />
      </div>
    );
  };
  
  export default App;
  
  /**
   * The Problem with the props is that we need to pass the props every time we have another component.
   * This creates a redundancy and non-efficient to write components. So React introduced Context-API to resolve this issue.
   * So the context-API is considered as a central point to get all the desired value/props for a component.
   * 
   * Take the above example:
   *    In this case, The App component is calling the Child component and the Child is calling the GrandChild component 
   *    which is using a prop to display something. Now this prop is not used by the App or the Child component, But in order
   *    to work, the prop should be passed to the GrandChild via App and Child which is redundant.
   *    
   *    To solve this, we need a central component that can carry all the variables/props for further rendering. This is
   *    achieved by Content-API 
   */
  