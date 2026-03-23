// Vercel provides build-time env vars via `import.meta.env`.
// Fallback keeps local development working.
export const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";