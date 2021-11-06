import express from "express";
import { createRoom, findRoom, getRoom } from "../controller/roomController.js";

const router = express.Router();

router.get('/', getRoom);
router.get('/:roomID', findRoom)
router.post('/', createRoom);

export default router;