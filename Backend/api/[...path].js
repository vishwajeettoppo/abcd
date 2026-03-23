import serverlessHttp from "serverless-http";

import app from "../index.js";
import connectDB from "../database/db.js";

const expressHandler = serverlessHttp(app);

// Vercel catch-all for `/api/*` paths.
// Example: `/api/login` is forwarded to Express route `/login`.
export default async function handler(req, res) {
  // Debug: confirm env vars are present on Vercel (do not log secrets).
  if (process.env.VERCEL) {
    console.log("[env-check] MONGO_DB_URI:", !!process.env.MONGO_DB_URI);
    console.log("[env-check] ACCESS_TOKEN_SECRET:", !!process.env.ACCESS_TOKEN_SECRET);
  }
  await connectDB();
  return expressHandler(req, res);
}

