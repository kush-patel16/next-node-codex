# next-node-codex

Production-ready starter for a full-stack setup with:
- **Frontend:** Next.js (App Router) + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express
- **Environment target:** Windows + GitHub Desktop workflow

## Project structure

```text
next-node-codex/
├── backend/
│   ├── index.js
│   ├── routes/
│   │   └── health.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── test/
│   │       └── page.tsx
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── README.md
├── prompts/
│   └── codex.md
├── notes/
│   └── setup.md
└── README.md
```

## Run backend

```bash
cd backend
npm install
npm run dev
```

Backend runs at `http://localhost:5000`.

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`.

## API contract

`GET /api/health`

```json
{
  "status": "OK",
  "message": "Backend running"
}
```
