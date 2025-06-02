import './index.css'
import { useState } from 'react'

// Import the Facebook icon image
import fb from './assets/fb.png'
import insta from './assets/insta.png'
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'

const App = () => {
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
    <>
      <header className="header">
        <div className="logo">
          <img
            // The logo is an image with a specific source, alt text, and styles for width, height, and object fit.
            src="/images/logo-and-favicon-modified.png"
            alt="ARMSS Logo"
          />
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
      <footer>
        <div className="footer-content">
          <div className="sb_footer section_padding">
            <div className="sb_footer-links">
              <div className="sb_footer-links-div">
                <h4>Aotearoa Refugee and Migrant Support Services (ARMSS)</h4>
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
              </div>
              <div className="sb_footer-links_div">
                <h4>Resources</h4>
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
              <div className="sb_footer-links_div">
                <h4>Partners</h4>
                <a href="#" onClick={handleMenuClick}>
                  MSD
                </a>
                <a href="#" onClick={handleMenuClick}>
                  Partner 2
                </a>
                <a href="#" onClick={handleMenuClick}>
                  Partner 3
                </a>
              </div>
              <div className="sb_footer-links_div">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Programs</a>
                <a href="#">The Team</a>
                <a href="#">Testimonials</a>
                <a href="#">Our Poem</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="sb_footer-links_div">
                <h4>Coming soon</h4>
                <p>
                  <img src={fb} alt=""></img>
                </p>
                <p>
                  <img src={twitter} alt=""></img>
                </p>
                <p>
                  <img src={linkedin} alt=""></img>
                </p>
                <p>
                  <img src={insta} alt=""></img>
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              @{new Date().getFullYear()} Aotearoa Refugee and Migrant Support
              Services (ARMSS). All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
