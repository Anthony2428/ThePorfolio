import React from "react";
import Resume from "./assets/Resume.docx";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <nav className="navbar py-4" style={{backgroundColor: "inherit"}}>
        <div className="container is-fluid">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <h1 style={{fontSize: "75px", fontFamily: "Fuggles, cursive"}}>AL</h1>
                </a>
            <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link to='projects' className="navbar-item">Projects</Link>
                    <a className="navbar-item" href={Resume} download target="_blank" rel="noopener noreferrer">Resume</a>
                    <a className="navbar-item" href="mailto:alopez0218.al@gmail.com" target="_blank" rel="noopener noreferrer">alopez0218.al@gmail.com</a>
                    <a className="navbar-item" href="https://www.linkedin.com/in/anthony-lopez-6b356218a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                </div>
            </div>
        </nav>
    )
};
export default Header;