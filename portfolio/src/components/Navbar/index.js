import React from "react";
import "./style.css";

function Navbar() {
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
                                <a className="nav-link" href="portfolio.html">Portfolio</a>
                            </li>
                        </div>
        
                        <div className="col-sm-4">
                            <li classNme="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                        </div>

                        <div className="col-sm-4">
                        <li className="nav-item">
                            <a className="nav-link" href="resume.html">Resume</a>
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