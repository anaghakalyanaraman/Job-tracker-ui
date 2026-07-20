# Job Tracker UI

A React frontend for the Job Tracker application. Track your job applications with a clean dashboard interface.

**Live Demo:** [Job Application Tracker](https://youtu.be/mZh4GmL-0k4)  
**Backend Repo:** https://github.com/anaghakalyanaraman/job-tracker-api
**Live Demo:** https://job-tracker-ui-sand.vercel.app

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
Register Page
<img width="1917" height="912" alt="image" src="https://github.com/user-attachments/assets/5ad95a7c-4af4-4dc1-a1ae-5a79f86c5453" />

Login Page
<img width="1600" height="757" alt="WhatsApp Image 2026-07-15 at 6 29 25 PM" src="https://github.com/user-attachments/assets/e827db61-a110-4717-becb-aec65d57a254"/>

Dashboard Page : Adding a job card
<img width="1600" height="752" alt="WhatsApp Image 2026-07-15 at 6 30 46 PM" src="https://github.com/user-attachments/assets/8c8fb7a4-4b9d-4ad9-939e-24e4f353fe5d" />

Dashboard
<img width="1600" height="752" alt="WhatsApp Image 2026-07-15 at 6 31 14 PM" src="https://github.com/user-attachments/assets/8538e086-ff3c-491c-8a6d-2cb21f2bbdc5" />
