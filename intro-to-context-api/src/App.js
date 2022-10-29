import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";
import "./App.css";

const AgentBond = () => (
  <Provider>
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h2>Mission Name: {context.data.mname}</h2>
            <h2>Agent Number: {context.data.agent}</h2>
            <h1>Mission Status: {context.data.acceptance}</h1>
            <button
              onClick={context.mstatus}
            >Choose to Accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  </Provider>
);

const AgentOne = () => {
  return (
    <AgentBond />
  );
};

const Agent = () => {
  return (
    <AgentOne />
  );
};

const App = () => {
  return(
    <div>
      <h1>Welcome to Mission Screen</h1>
      
        <Agent />
      
    </div>
  );
};

// This will also work. Remember to remove the Provider tag in AgentBond if you are using this.
// const App = () => {
//   return(
//     <div>
//       <h1>Welcome to Mission Screen</h1>
//       <Provider>
//         <Agent />
//       </Provider>
//     </div>
//   );
// };

export default App;