# Drix Tech Talent — Frontend

Static HTML/CSS/JS frontend

## Deploy to Vercel
1. Push `frontend/` folder to its own GitHub repo
2. Import repo on vercel.com
3. No build command needed (static site)
4. Vercel auto-detects vercel.json for routing

## Important
Before deploying, make sure `js/app.js` has the correct
API_BASE pointing to your Render backend:

const API_BASE = 'https://drix-tech-talent.onrender.com';

## Local dev
Open with Live Server in VS Code or any static file server.
