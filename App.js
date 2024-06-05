import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from "./about";
import Info from "./info";
import Pay from "./pay";
import Test from "./test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Test />}
        />
        <Route
          exact
          path="/about"
          element={<About />}
        />

        <Route
          exact
          path="/info"
          element={<Info />}
        />
        <Route
          exact
          path="/Pay"
          element={<Pay />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
