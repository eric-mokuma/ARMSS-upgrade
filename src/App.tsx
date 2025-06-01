import './index.css'

const App = () => {
  // This is a simple React component that renders a header with a logo and navigation links.
  // The header contains a logo and a navigation bar with several links.
  return (
    <header className="header">
      <a href="/images/favicon-square.png" className="logo">
        <img
          src="/images/favicon-square.png"
          alt="Logo"
          style={{ height: '74px', width: 'auto', objectFit: 'contain' }}
        />
      </a>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">News & Announcements</a>
        <a href="/">About us</a>
        <a href="/">Programs</a>
        <a href="/">The Team</a>
        <a href="/">Testimonials</a>
        <a href="/">Our Poem</a>
        <a href="/">Contact Us</a>
      </nav>
    </header>
  )
}

export default App
