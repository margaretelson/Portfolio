import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const location = useLocation();
    console.log(location)

return (
    <div className="container-fluid">
        <div class="row-fluid">  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="p-3 mb-2 bg-light text-dark"></div> 
                <a className="navbar-brand" href="index.html">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">   
        
                        <div className="col-sm-4">
                            <li className="nav-item">
                            <Link to="/portfolio"
                            className={location.pathname === "/portfoio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                            </Link>
                            </li>
                        </div>
        
                        <div className="col-sm-4">
                            <li classNme="nav-item">
                            <Link to="/contact"
                            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                            </Link>
                            </li>
                        </div>

                        <div className="col-sm-4">
                        <li className="nav-item">
                            <Link to="/resume"
                            className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                            Resume
                            </Link>
                        </li>
                    </div>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
)
}

export default Navbar;