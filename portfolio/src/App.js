import React from 'react';
import './App.css';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import MargaretsPortfolio from './pages/Portfolio.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from './pages/Resume';



function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/margaretsportfolio" component={MargaretsPortfolio} />
      <Route exact path="/resume" component={Resume} />
      </Router>
    </div>
  );
}

export default App;
