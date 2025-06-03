import '../index.css'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>ARMSS</h4>
            <a href="#">Family integration & Parenting</a>
            <a href="#">Community Support and Advocacy</a>
            <a href="#">Cultural Bridging</a>
            <a href="#">Human Trafficking Prevention program</a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="#">Best-Embrace-Kaimahi</a>
            <a href="#">New Comer Support</a>
            <a href="#">Cultural Capacity Building Workshop</a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <a href="#">MSD</a>
            <a href="#">Partner 2</a>
            <a href="#">Partner 3</a>
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
          <div>
            <h4>Social Media</h4>
            <div className="sb_footer-links_div social-icons">
              <a
                href="#"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="social-icon twitter" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="#"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="#"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
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
)

export default Footer
