# Task Manager App

Full stack task manager for the Helfy home assignment.

## Project Structure

```
├── backend/     Express API
├── frontend/    React + Vite
└── README.md
```

---

## Setup & Installation

You need Node.js installed. Then run `npm install` in both folders.

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

## How to Run

Open two terminals — backend first, then frontend.

**Terminal 1 (backend):**

```bash
cd backend
npm run dev
```

Runs on http://localhost:4000

**Terminal 2 (frontend):**

```bash
cd frontend
npm run dev
```

Runs on http://localhost:5173 (Vite default port)

The frontend talks to `http://localhost:4000/api/tasks` — so the backend has to be running or you'll get errors.

---

## API Endpoints

Base URL: `http://localhost:4000/api/tasks`

### GET /api/tasks
Returns all tasks as JSON array.

### POST /api/tasks
Create a new task.

Body:
```json
{
  "title": "Buy milk",
  "description": "optional",
  "priority": "medium",
  "completed": false
}
```

`title` is required. `priority` can be `low`, `medium`, or `high` (defaults to medium).

### PUT /api/tasks/:id
Update a task. Send the full task object:

```json
{
  "title": "Updated title",
  "description": "some text",
  "completed": true,
  "priority": "high"
}
```

### DELETE /api/tasks/:id
Deletes the task. Returns 204 on success.

### PATCH /api/tasks/:id/toggle
Toggles `completed` true/false. Returns the updated task.

---

## Assumptions & Design Decisions

- **In-memory storage** — tasks live in a JS array on the server. Restarting the backend resets to seed data. I kept it simple instead of adding a database.
- **No auth** — single user, no login. Wasn't in the requirements.
- **Zod validation** on POST/PUT — returns 400 if the body is invalid.
- **Frontend state** — tasks come from the API, filter/sort/theme run in React. I didn't move sorting to the backend, it's easier to do on the client for this size.
- **Carousel** — TaskList duplicates the array and uses CSS animation. Pauses on hover.
- **Dark/light theme** — just a class on the app wrapper + CSS overrides, no library.
- **localStorage** — saves theme, filter, and sort preference so they stick after refresh. Tasks themselves are not cached locally (API is the source of truth).
- **Delete confirmation** — `window.confirm` before delete. Simple but works.
- **Plain CSS** — no Tailwind or component library. Wanted it to look like my own code.

---

## Time Spent (rough estimate)

| Part | Time |
|------|------|
| Backend (routes, controller, validation) | 40 min |
| Frontend (components, CRUD, carousel) | 60 min |
| Theme toggle + sorting | 40 min |
| localStorage (filter/sort/theme) | 25 min |
| Bug fixes & testing | 30min |
| README | 20-40 min |

---

Daniel Saggir
