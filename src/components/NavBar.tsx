import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Organization</div>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">News & Announcements</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Programs</a>
        </li>
        <li>
          <a href="#">The Team</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Our Poem</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
