import { Link, useLocation } from 'react-router-dom'
import './index.css'

const Header = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <h2 className='logo'>CommunionHub</h2>
      <ul className='navPage'>
        <li>
          <Link
            to="/"
            className={`link ${location.pathname === '/' ? 'active-link' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={`link ${location.pathname === '/events' ? 'active-link' : ''}`}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`link ${location.pathname === '/about' ? 'active-link' : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={`link ${location.pathname === '/login' ? 'active-link' : ''}`}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
