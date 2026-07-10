import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
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
      const response = await axios.get('http://localhost:8000/users', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setJobs(response.data)
    } catch (err) {
      navigate('/login')
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Job Tracker</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <div className="grid gap-4">
            {jobs.map(job => (
              <div key={job.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-bold">{job.name}</h3>
                <p className="text-gray-600">{job.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}