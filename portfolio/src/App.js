import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <section className="section">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="projects" element={<Projects />}/>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}


export default App;
