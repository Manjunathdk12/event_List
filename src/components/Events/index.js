import { useState } from 'react'
import EventForm from '../EventForm'
import './index.css'

const Events = () => {
  const [events, setEvents] = useState([])
  const [category, setCategory] = useState('All')
  const [editIndex, setEditIndex] = useState(null)

  const filteredEvents = category === 'All'
    ? events
    : events.filter(event => event.category === category)

  const handleAddOrEdit = (eventData) => {
    if (editIndex !== null) {
      const updated = [...events]
      updated[editIndex] = eventData
      setEvents(updated)
      setEditIndex(null)
    } else {
      setEvents([...events, eventData])
    }
  }

  const handleDelete = (index) => {
    const updated = [...events]
    updated.splice(index, 1)
    setEvents(updated)
  }

  return (
    <div className='events-bg-container'>
    <div className="events-container">
      <h2>Events</h2>

      <div className="filter-container">
        <label>Filter by Category:</label>
        <select onChange={e => setCategory(e.target.value)} value={category}>
          <option value="All">All</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <EventForm onSubmit={handleAddOrEdit} editData={editIndex !== null ? events[editIndex] : null} />

      <ul className="event-list">
        {filteredEvents.map((event, index) => (
          <li key={index} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.date} - {event.location}</p>
            <p>{event.description}</p>
            <p><strong>{event.category}</strong></p>
            <div className="event-buttons">
              <button onClick={() => setEditIndex(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Events
