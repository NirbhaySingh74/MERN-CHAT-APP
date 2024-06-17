import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const route = express.Router();

route.post("/send/:id", protectRoute, sendMessage);
export default route;
