import React from "react";
import "./home.css";
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
    return (
       
            <div class="container-fluid">
                <Navbar />
                <div class="row-fluid">
                    <div id="panel-body">
                        <form method="post" action="/action_page.php">
                        <div class="form-group">
                            <label for="contactname">Name</label>
                            <input type="text" class="form-control" id="contactname" aria-describedby="form-group"/>
                        </div>
                        <div class="form-group">
                            <label for="contactemail">Email Address</label>
                            <input type="email" class="form-control" id="contactemail"/>
                            <small id="text" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="contactmessage">Message</label>
                            <textarea class="form-control" id="contactmessage" rows="6"></textarea>
                        </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
      

    )
}

export default Contact;