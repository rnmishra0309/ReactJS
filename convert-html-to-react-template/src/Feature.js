import React from "react";
import Button from "./Button";

const Feature = () => (
    <div className="bg-success text-center">
      <p className="display-4 text-white p-4">Discover the amazing new app</p>
      <p className="text-white">
        Lorem ipsum dolor sit consectetur. Feature, rem?
      </p>
      <div className="row  p-4">
        <div className="col-6 text-right">
          <Button title="Play Store"/>
        </div>
        <Button title="App Store"/>
        <div className="col-6 text-center"></div>
      </div>
    </div>
);

export default Feature;