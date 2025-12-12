import mongoose from "mongoose";

const connectDB = async () => {
try {
const conn = await mongoose.connect(process.env.MONGO_URI, {
// Optional but recommended configs:
serverSelectionTimeoutMS: 5000,
socketTimeoutMS: 45000,
});


console.log(`🟢 MongoDB Connected: ${conn.connection.host}`);


} catch (error) {
console.error(`🔴 MongoDB Connection Error: ${error.message}`);
process.exit(1); // Stop the server if DB fails
}
};

export default connectDB;
