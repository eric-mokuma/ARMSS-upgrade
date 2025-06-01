import './index.css'

const App = () => {
  // This is a simple React component that renders a header with a logo and navigation links.
  // The header contains a logo and a navigation bar with several links.
  return (
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
        <a href="#">Programs</a>
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

export default App
