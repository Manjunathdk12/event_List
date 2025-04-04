import { Link } from 'react-router-dom'
import "./index.css"

const Header = () => (
  <nav className="navbar">
    <h2 className='logo'>CommunionHub</h2>
    <ul className='navPage'>
      <li ><Link to="/" className='link'>Home</Link></li>
      <li ><Link to="/events" className='link'>Events</Link></li>
      <li ><Link to="/about" className='link'>About</Link></li>
      <li ><Link to="/login" className='link'>Login</Link></li>
    </ul>
    <div></div>
  </nav>
)

export default Header
