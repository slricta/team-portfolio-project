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
                <NavLink to="/" className="text-lg font-semibold">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="text-lg font-semibold">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/team" className="text-lg font-semibold">Team Members</NavLink>
            </li>
            <li>
                <NavLink to="/projects" className="text-lg font-semibold">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="text-lg font-semibold">Contact Us</NavLink>
            </li>
        </ul>
    </nav> 
  )
}

