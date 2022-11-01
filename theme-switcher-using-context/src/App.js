import React, { useState } from "react";
import Parent from "./component/Parent";
import "./App.css";
import AppContext from "./component/Context";

const App = () => {
  const themeHook = useState("dark");
  return (
    <AppContext.Provider value={themeHook}>
      <Parent />
    </AppContext.Provider>
  );
};

export default App;
