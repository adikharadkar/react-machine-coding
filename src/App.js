import React from "react";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
