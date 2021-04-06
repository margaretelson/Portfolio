import React from "react";
import "./home.css";
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
  return (
    <div>
        <Navbar />
        <main className="container-fluid">
            <section className="row">
            <div className="col-sm-12">
                <div class="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Margaret Elson's Portfolio</h1>
                    <p className="lead">Please take your time in exploring my continued work in the web development industry.</p>
                </div>
                </div>
            </div>
            </section> 

            <section className="row">
                <div className="media">
                    <img src="https://images.squarespace-cdn.com/content/v1/5d1dbb17ccb70b0001310fce/1582907368114-A5SD679QOXO47O5I8BDB/ke17ZwdGBToddI8pDm48kDtqroP9uiuUFhntm95vD-NZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7YmDye92LJlx5Z6JHLEUGa3rcEdEW5zPtG6ZEbhpaG1-ufjxAQ1TenoAcyDEtpKMYQ/Untitled.png" className="mr-3" alt="Image of Margaret Elson"/>
                    <div className="media-body">
                        <h5 className="mt-0">About Me</h5>
                        <p>My name is Margaret Elson. I am a Software Engineer actively looking for a position in the tech industry. I currently live in New York City but am open to positions everywhere! I am enrolled in Columbia University's coding bootcamp and am building my skills
                            in HTML5, CSS3, JavaScript, jQuery, Java, Bootstrap, Express.js, React.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more. Please feel free to reach out with any questions!
                            </p>
                        
                        <div className="row">
                            <button id="linkedin" type="button"><a href="https://www.linkedin.com/in/margaret-elson-b59627161/" className="btn btn-outline-info" ><i className="fa fa-linkedin"><br />Linkedin</i></a></button>
                            <br />
                            <button id="instagram" type="button"><a href="https://www.instagram.com/margaretelson/" className="btn btn-outline-danger"><i className="fa fa-instagram"><br />Instagram</i></a></button>
                            <br />
                            <button id="facebook" type="button"><a href="https://www.facebook.com/margaret.elson.3/" className="btn btn-outline-primary"><i className="fa fa-facebook-square"><br />Facebook</i></a></button>
                            <br />
                            <button id="phone" type="button"><a href="tel:5132646274" className="btn btn-outline-warning"><i class="fa fa-phone"><br />(513)264-6274</i></a></button>
                            <br />
                            <button id="email" type="button"><a href="mailto:margaret.a.elson@gmail.com" className="btn btn-outline-success"><i className="fa fa-envelope"><br />Email</i></a></button>
                            <br />
                        </div>
                    </div>
                </div>
            </section> 
        </main> 
    </div>
    
    )
}

export default Home;