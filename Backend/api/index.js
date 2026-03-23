import serverlessHttp from "serverless-http";

import app from "../index.js";
import connectDB from "../database/db.js";

const expressHandler = serverlessHttp(app);

// Vercel serverless entrypoint for the Express app.
// Ensures Mongo is connected before handling each request.
export default async function handler(req, res) {
  await connectDB();
  return expressHandler(req, res);
}

