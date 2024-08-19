import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import mongoose from "mongoose";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

// Load environment variables
dotenv.config();

// Restrict CORS to only the specified frontend URL
app.use(
  cors({
    origin: "*",
    credentials: true, // Allow cookies to be sent with requests
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 7000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected");
    server.listen(PORT, () => {
      console.log(`server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "deployed" });
});
