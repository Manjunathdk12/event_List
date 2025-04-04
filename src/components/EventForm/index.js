import { useState, useEffect } from 'react'
import './index.css'

const EventForm = ({ onSubmit, editData }) => {
  const [form, setForm] = useState({
    title: '', date: '', location: '', description: '', category: 'Religious'
  })

  useEffect(() => {
    if (editData) setForm(editData)
  }, [editData])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(form)
    setForm({ title: '', date: '', location: '', description: '', category: 'Religious' })
  }

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="date" value={form.date} onChange={handleChange} placeholder="Date" type="date" required />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit">{editData ? 'Update Event' : 'Add Event'}</button>
    </form>
  )
}

export default EventForm
