import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
    </BrowserRouter>
  );
}


export default App;
