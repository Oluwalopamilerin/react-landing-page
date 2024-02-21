import "./NavbarStyles.css"

import React, {useState} from 'react'
import {Link} from "react-router-dom"

import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(prev => !prev);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const linkList = [
    {
      id:1, 
      title: "Home",
      path: "/"
    },
    {
      id:2, 
      title: "About",
      path: "/about"
    },
    {
      id:3, 
      title: "Projects",
      path: "/project"
    },
    {
      id:4, 
      title: "Contact",
      path: "/contact"
    }
  ]
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click? "nav-menu active" : "nav-menu"}>
        {linkList?.map((obj) => (
          <li key={obj?.id}>
          <Link to={obj.path}>{obj.title}</Link>
        </li>
        ))}
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click? (<FaTimes size = {20} style={{color: "#fff"}}/>): (<FaBars size = {20} style={{color: "#fff"}}/>)}
      </div>
    </div>
  )
}

export default Navbar
