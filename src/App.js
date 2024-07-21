// src/App.js
import React from "react";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Signup />
      <Signin />
    </div>
  );
};

export default App;
