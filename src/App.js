import React from "react";
import {Route, Routes} from "react-router-dom"
import { Home } from "./Pages/Home";
import './App.css'
export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  );
}
