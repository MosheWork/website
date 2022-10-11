import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/office1.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        <p>Hi, i'm a FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
        <Link to="/projects" className="btn">project</Link>
        <Link to="/contact" className="btn-light">contact</Link>
      </div>
      </div>
  
    </div>
  );
};

export default Heroimg;
