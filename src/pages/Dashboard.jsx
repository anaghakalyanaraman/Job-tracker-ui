import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_URL from '../config'

export default function Dashboard() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [newJob, setNewJob] = useState({ company: '', role: '', status: 'Applied', notes: '' })
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    fetchJobs()
  }, [])

  async function fetchJobs() {
    try {
      const response = await axios.get(`${API_URL}/jobs`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setJobs(response.data)
    } catch (err) {
      navigate('/login')
    } finally {
      setLoading(false)
    }
  }

  async function handleAddJob(e) {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/jobs`, newJob, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setJobs([...jobs, response.data])
      setNewJob({ company: '', role: '', status: 'Applied', notes: '' })
      setShowForm(false)
    } catch (err) {
      alert('Failed to add job')
    }
  }

  async function handleDelete(jobId) {
    try {
      await axios.delete(`${API_URL}/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setJobs(jobs.filter(job => job.id !== jobId))
    } catch (err) {
      alert('Failed to delete job')
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  function statusColor(status) {
    switch (status) {
      case 'Offer': return 'bg-green-100 text-green-700'
      case 'Rejected': return 'bg-red-100 text-red-700'
      case 'Interview': return 'bg-yellow-100 text-yellow-700'
      case 'OA': return 'bg-purple-100 text-purple-700'
      default: return 'bg-blue-100 text-blue-700'
    }
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Job Tracker</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          {showForm ? 'Cancel' : '+ Add Job'}
        </button>

        {showForm && (
          <form onSubmit={handleAddJob} className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Add New Job</h2>
            <input placeholder="Company" value={newJob.company}
              onChange={(e) => setNewJob({...newJob, company: e.target.value})}
              className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <input placeholder="Role" value={newJob.role}
              onChange={(e) => setNewJob({...newJob, role: e.target.value})}
              className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <select value={newJob.status}
              onChange={(e) => setNewJob({...newJob, status: e.target.value})}
              className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Applied</option>
              <option>OA</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
            <input placeholder="Notes (optional)" value={newJob.notes}
              onChange={(e) => setNewJob({...newJob, notes: e.target.value})}
              className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Add Job
            </button>
          </form>
        )}

        {jobs.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No jobs yet. Click + Add Job to get started.</p>
        ) : (
          <div className="grid gap-4">
            {jobs.map(job => (
              <div key={job.id} className="bg-white p-5 rounded-lg shadow flex justify-between items-center hover:shadow-md transition">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{job.company}</h3>
                  <p className="text-gray-500 text-sm mb-2">{job.role}</p>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor(job.status)}`}>
                    {job.status}
                  </span>
                  {job.notes && <p className="text-sm text-gray-400 mt-2">{job.notes}</p>}
                  <p className="text-xs text-gray-300 mt-1">{new Date(job.applied_date).toLocaleDateString()}</p>
                </div>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
