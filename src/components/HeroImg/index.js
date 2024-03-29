import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="background-img"/>
      </div>

      <div className="content">
        <p>HI, I AM OLUWAPAMILERIN.</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg