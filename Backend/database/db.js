import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_DB_URI } = process.env;

// Serverless-safe Mongo connection:
// - Avoid `process.exit`
// - Cache the connection across invocations
let cachedConnectionPromise = null;

export default async function connectDB() {
  if (!MONGO_DB_URI) {
    throw new Error("MONGO_DB_URI is not set");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!cachedConnectionPromise) {
    cachedConnectionPromise = mongoose.connect(MONGO_DB_URI);
  }

  await cachedConnectionPromise;
  return mongoose.connection;
}