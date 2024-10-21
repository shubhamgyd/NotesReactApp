import "./App.css";
import { Archive } from "./pages/Archive";
import { Home } from "./pages/Home";
import { Delete } from "./pages/Delete";
import { Routes, Route } from "react-router-dom";
import { Important } from "./pages/Important";
import { useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/bin" element={<Delete />} />
        <Route path="/important" element={<Important />} />
      </Routes>
    </>
  );
}

export default App;
