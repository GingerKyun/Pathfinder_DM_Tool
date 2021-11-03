import express from "express";
import { getChar, createCharacter } from "../controller/charController.js"

const router = express.Router();

router.get('/', getChar);
router.post('/', createCharacter);

export default router;