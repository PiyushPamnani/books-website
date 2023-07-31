import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Books, Add, Update } from "./components";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Books />} />
      <Route path="/add" element={<Add />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  </BrowserRouter>
);

export default App;
