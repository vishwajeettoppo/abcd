import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting the database");
        process.exit(1);

    }
}
    export default connectDB;