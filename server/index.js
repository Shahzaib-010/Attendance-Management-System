import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Connect to DB
connectDB();

app.get("/", (req, res) => {
res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
console.log(`🚀 Server running on port ${PORT}`)
);
