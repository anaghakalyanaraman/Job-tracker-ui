# Job Tracker UI

A React frontend for the Job Tracker application. Track your job applications with a clean dashboard interface.

**Live Demo:** (add URL when deployed)  
**Backend Repo:** https://github.com/anaghakalyanaraman/job-tracker-api

---

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Routing:** React Router
- **Auth:** JWT stored in localStorage

---

## Features

- Register and login with JWT authentication
- Dashboard showing all your job applications
- Add new job applications with company, role, status, notes
- Color coded status badges (Applied, OA, Interview, Offer, Rejected)
- Delete job applications
- Protected routes — redirects to login if not authenticated

---

## Pages

| Page | Route | Description |
|---|---|---|
| Login | /login | Email + password login |
| Register | /register | Create new account |
| Dashboard | /dashboard | View, add, delete jobs |

---

## Running Locally

```bash
git clone https://github.com/anaghakalyanaraman/job-tracker-ui
cd job-tracker-ui
npm install
npm run dev
```

Make sure the backend is running at `http://localhost:8000` first.

App runs at `http://localhost:5173`

---

## Screenshots

(add screenshots here)
