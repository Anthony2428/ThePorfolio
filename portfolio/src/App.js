import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="projects" element={<Projects />}/>
          </Routes>
    </BrowserRouter>
  );
}


export default App;
