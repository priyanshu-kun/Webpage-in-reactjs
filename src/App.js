import './styles/App.css';

import React, { useState, useRef } from 'react';
import About from './about';
import Contact from './contact';
import Navbar from './navbar';

import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      {' '}
      <div className="App">
        {' '}
        <Navbar />{' '}
        <Switch>
          {' '}
          <Route exact path="/" component={Hero} />{' '}
          <Route exact path="/about" component={About} />{' '}
          <Route exact path="/resume" component={About} />{' '}
          <Route exact path="/contact" component={Contact} />{' '}
        </Switch>{' '}
      </div>{' '}
    </Router>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <h1 className="background-text">
        Developer & <br /> Designer
      </h1>
      <div className="hero-subSection">
        <p>Priyanshu sharma</p>
        <h1>
          I'am a full stack <br /> <span>web developer</span>.
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat
          consequatur necessitatibus consectetur odio dolore velit.
        </p>
        <Link className="call-to-action" to="/contact">
          Let's Talk <FaArrowRight className="fa-arrow-right" />{' '}
        </Link>
      </div>
      <p className="scroll-snippet">
        <FaArrowRight className="fa-arrow-snippit" />
        scroll down to know more
      </p>
      <div className="social-icons">
        <a href="#">
          <FaGithub className="icons github" />
        </a>
        <a href="#">
          <FaInstagram className="icons instagram" />
        </a>{' '}
        <a href="#">
          <FaLinkedin className="icons linkedin" />
        </a>{' '}
        <a href="#">
          <FaEnvelope className="icons envelop" />
        </a>
      </div>
    </section>
  );
}

export default App;
