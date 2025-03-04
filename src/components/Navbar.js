import React, { useState } from 'react'
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"


export const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to="/" className="title">Team Name</Link>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/team">Team Members</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
        </ul>
    </nav> 
  )
}

