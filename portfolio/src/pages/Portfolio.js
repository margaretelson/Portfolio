import React from "react";
import "./portfolio.css";
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  return (
  <div>
      <Navbar />
    <div className="container-fluid">
        <div id="row">
            <div className="col-sm-12">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">
                                <div className="moveOverh1"><img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" height="75px" width="75px" alt="git hub logo"/>
                                    Margaret's Github
                                </div>
                            </h1>    
                                <div className="moveOver">
                                <p>Github is a hosting platform for software development and for it's users to share and deploy their work. This may also be the best platform to see Margaret's current work and project history. Please scroll below to see a summarized version of her latest tasks. </p>
                                <button type="button"><a href="https://github.com/margaretelson" className="btn btn-link" id="githubbtn">Click here to go to her Github!</a></button>
                                </div> 
                        </div>  
                    </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
                <div className="col col-sm-3" id="BSEat">
                    <div className="card" style={{width: "18rem"}} >
                        <img className="card-img-top" src="./public/img/BSeatHome.png" alt="Boston Students Eat"/>
                        <div className="card-body">
                        <h5 className="card-title">Boston Students Eat</h5>
                        <p className="card-text">Boston Students Eat is a website designed for students at specific schools in the Boston area. This website integrates JQuery, two stylying platforms, and two APIs. I lead the back-end development of the 'Take Out' page as well as some aspects on the front-end.</p>
                        <a href="https://margaretelson.github.io/Boston_Students_Eat/" className="btn btn-outline-primary" id="Boston">Visit the live website!</a>
                        </div>
                    </div>
                </div>
    

                <div className="col col-sm-3" id="Weather">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="./public/img/WeatherParis.png" alt="Weather Dashboard"/>
                        <div className="card-body">
                        <h5 className="card-title">International Weather Dashboard</h5>
                        <p className="card-text">This International Weather Dashboard uses an API and Luxom to show the user accurate, real-time weather data from anywhere in the world by searching for the city name. I worked both front and back-end on this site.</p>
                        <a href="https://margaretelson.github.io/Weather-API-Site/" className="btn btn-outline-primary" id="weatherBtn">Visit the live website!</a>
                        </div>
                    </div>
                </div>


                <div className="col col-sm-3" id="teamProfID">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="./public/img/livehtml.png" alt="Team Profile Builder" id="teamimg"/>
                        <div className="card-body">
                        <h5 className="card-title">Team Profile Builder</h5>
                        <p className="card-text">The Team profile generator is an open source for users to quickly and easily build their teams within the company and add any additional, userful notes about those team members. This application has been specifically made for a softare developing team which includes a Manager, Engineer(s), and Intern(s).</p>
                        <a href="https://drive.google.com/file/d/1-1N0y_eV-U8qzg3Sbmku4tX_1bxPYKMp/view?usp=sharing" className="btn btn-outline-primary" id="weatherBtn">Watch the demo here!</a>
                        </div>
                    </div>
                </div>

        </div>
        <div className="row">
                <div className="col col-sm-3" id="expressNote">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="./public/img/noteTaker.png" alt="Express Note Taker" id="noteImg"/>
                        <div className="card-body">
                        <h5 className="card-title">Express Note Taker</h5>
                        <p className="card-text">The Express Note Taker is an application for users to write a note, save it to the database, and delete it when they desire. The application was created using HTML, CSS, Javascript, and Express.</p>
                        <a href="https://salty-headland-62604.herokuapp.com/notes" className="btn btn-outline-primary" id="weatherBtn">Visit the live website!</a>
                        </div>
                    </div>
                </div>


                <div className="col col-sm-3" id="yourEatsID">
                    <div className="card" style={{width: "18rem"}} >
                        <img className="card-img-top" src="./public/img/ureats.png" alt="yourEats"/>
                        <div className="card-body">
                        <h5 className="card-title">yourEats</h5>
                        <p className="card-text">yourEats is a customizable food service application where the user is one click away from there "usual" order at their favorite restaurant. The application can be personalized to the user when they log-in and can retain the memory of any notes the user wants to add to their customized order.</p>
                        <a href="https://radiant-oasis-56969.herokuapp.com/" className="btn btn-outline-primary" id="weatherBtn">Visit the live website!</a>
                        </div>
                    </div>
                </div>

        </div>
    </div>

</div>
)
};

export default Portfolio;