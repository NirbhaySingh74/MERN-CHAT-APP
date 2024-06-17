import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import mongoose from "mongoose";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => {
  res.send("Hello");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log(`server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
