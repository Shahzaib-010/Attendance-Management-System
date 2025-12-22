// server/index.js
import express from "express";
import cors from "cors";
import connectToDatabase from "./config/db.js";
import "dotenv/config";
import router from "./src/routes/auth.js"
import userRoutes from "./src/routes/userRoutes.js"
import leaveRoutes from "./src/routes/leaveRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', router)
app.use("/api/users", userRoutes);
app.use("/api/leaves", leaveRoutes);



connectToDatabase(); // ✅ CONNECT DB FIRST

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

