import serverlessHttp from "serverless-http";

import app from "../index.js";
import connectDB from "../database/db.js";

const expressHandler = serverlessHttp(app);

// Vercel serverless entrypoint for the Express app.
// Ensures Mongo is connected before handling each request.
export default async function handler(req, res) {
  if (process.env.VERCEL) {
    console.log("[env-check] (index) MONGO_DB_URI:", !!process.env.MONGO_DB_URI);
    console.log(
      "[env-check] (index) ACCESS_TOKEN_SECRET:",
      !!process.env.ACCESS_TOKEN_SECRET
    );
  }
  await connectDB();
  return expressHandler(req, res);
}

