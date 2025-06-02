import './index.css'
import { useState } from 'react'

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
        <div className="footer">
          <div className="sb_footer section_padding">
            <div className="sb_footer-links">
              <div className="sb_footer-links_div">
                <h4>ARMSS</h4>
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
                <h4>Social Media</h4>
                <div className="bg-[#2d2b35] text-white flex flex-col items-center justify-center py-16">
                  <div className="sb_footer-links_div flex gap-6">
                    <a href="#">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter fa-lg"></i>
                    </a>
                    <a href="#">
                      <i
                        className="fab fa-linkedin-in fa-lg"
                        style={{
                          color: '#0077b5',
                          background: '#7c65ff',
                          borderRadius: '50%',
                          padding: '16px',
                        }}
                      ></i>
                    </a>
                    <a href="#">
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{
                          color: '#e4405f',
                          background: '#7c65ff',
                          borderRadius: '50%',
                          padding: '16px',
                        }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              @{new Date().getFullYear()} Aotearoa Refugee and Migrant Support
              Services (ARMSS). All rights reserved.
            </div>
            <div className="sb_footer-below-links">
              <a href="#">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>
              <a href="#">
                <div>
                  <p>Privacy</p>
                </div>
              </a>
              <a href="#">
                <div>
                  <p>Security</p>
                </div>
              </a>
              <a href="#">
                <div>
                  <p>Cookies Declaration</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
