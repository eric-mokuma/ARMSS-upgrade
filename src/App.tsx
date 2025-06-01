function App() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/images/favicon-square.png"
          alt="Logo"
          className="h-8 w-auto object-contain mr-4"
        />
      </div>
      <ul className="flex space-x-6 text-gray-700 font-medium ml-auto">
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            News & Announcements
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Programs
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            The Team
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Our Poem
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default App
