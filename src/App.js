import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home"

function App() {
  return (
    <div className="contain">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
