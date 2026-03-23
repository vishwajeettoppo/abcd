import serverlessHttp from "serverless-http";

import app from "../index.js";
import connectDB from "../database/db.js";

const expressHandler = serverlessHttp(app);

// Vercel catch-all for `/api/*` paths.
// Example: `/api/login` is forwarded to Express route `/login`.
export default async function handler(req, res) {
  await connectDB();
  return expressHandler(req, res);
}

