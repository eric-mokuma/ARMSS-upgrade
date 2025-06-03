import '../index.css'
import '../styles/Header.css' // Assuming you have a CSS file for styles
import { useState } from 'react'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Toggle dropdown visibility
  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    setDropdownOpen((open) => !open)
  }

  // Close dropdown when a menu item is clicked
  const handleMenuClick = () => {
    setDropdownOpen(false)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo-and-favicon-modified.png" alt="ARMSS Logo" />
      </div>
      <nav className="navbar">
        <a href="#" className="home">
          Home
        </a>
        <span style={{ color: 'green' }}>|</span>
        <a href="#">News & Announcements</a>
        <span style={{ color: 'green' }}>|</span>
        <a href="#">About us</a>
        <span style={{ color: 'green' }}>|</span>
        <div className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            onClick={handleDropdownToggle}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            Programs{' '}
            <i
              className="fa-solid fa-chevron-down"
              style={{
                marginLeft: 4,
                transition: 'transform 0.2s',
                transform: dropdownOpen ? 'rotate(180deg)' : 'none',
              }}
            ></i>
          </a>
          <div
            className="dropdown-menu"
            style={{ display: dropdownOpen ? 'flex' : 'none' }}
          >
            <a href="#" onClick={handleMenuClick}>
              Family integration & Parenting
            </a>
            <a href="#" onClick={handleMenuClick}>
              Community Support and Advocacy
            </a>
            <a href="#" onClick={handleMenuClick}>
              Cultural Bridging
            </a>
            <a href="#" onClick={handleMenuClick}>
              Human Trafficking Prevention program
            </a>
            <a href="#" onClick={handleMenuClick}>
              Best-Embrace-Kaimahi
            </a>
            <a href="#" onClick={handleMenuClick}>
              New Comer Support
            </a>
            <a href="#" onClick={handleMenuClick}>
              Cultural Capacity Building Workshop
            </a>
          </div>
        </div>
        <span style={{ color: 'green' }}>|</span>
        <a href="#">The Team</a>
        <span style={{ color: 'green' }}>|</span>
        <a href="#">Testimonials</a>
        <span style={{ color: 'green' }}>|</span>
        <a href="#">Our Poem</a>
        <span style={{ color: 'green' }}>|</span>
        <a href="#">Contact us</a>
      </nav>
    </header>
  )
}

export default Header
