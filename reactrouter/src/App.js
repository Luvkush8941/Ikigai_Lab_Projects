import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
};

export default App;
