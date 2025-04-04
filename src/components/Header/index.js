import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './index.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="navbar">
      <Link to="/" className="logo" >CommunionHub</Link>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
      </div>

      <ul className={`navPage ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className={`link ${location.pathname === '/' ? 'active' : ''}`} onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/events" className={`link ${location.pathname === '/events' ? 'active' : ''}`} onClick={toggleMenu}>Events</Link>
        </li>
        <li>
          <Link to="/about" className={`link ${location.pathname === '/about' ? 'active' : ''}`} onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/login" className={`link ${location.pathname === '/login' ? 'active' : ''}`} onClick={toggleMenu}>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
