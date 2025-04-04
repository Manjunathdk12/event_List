import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './index.css'

const Home = () => {
  const navigate = useNavigate()
  const [animate, setAnimate] = useState(false)

  const handleClick = () => {
    setAnimate(true)
    setTimeout(() => {
      navigate('/events')
    }, 600)
  }

  return (
    <div className='home-bg-container'>
      <h1 className='heading fade-slide-in'>Connecting People Across Faiths & Interests</h1>
      <p className='para fade-slide-in delay-1'>Connecting people of all faiths through events and community support.</p>
      <button
        onClick={handleClick}
        className={`button fade-slide-in delay-2 ${animate ? 'button-clicked' : ''}`}
      >
        Explore Events
      </button>
    </div>
  )
}

export default Home
