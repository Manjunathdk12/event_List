import { useNavigate } from 'react-router-dom'
import "./index.css"
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='home-bg-container'>
      <h1 className='heading'>Connecting People Across Faiths & Interests</h1>
      <p className='para'>Connecting people of all faiths through events and community support.</p>
      <button onClick={() => navigate('/events')} className='button'>Explore Events</button>
    </div>
  )
}

export default Home
