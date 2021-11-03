import express from "express";
import { createRoom, getRoom } from "../controller/roomController.js";

const router = express.Router();

router.get('/', getRoom);
router.post('/', createRoom);

export default router;