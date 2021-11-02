import express from "express";
import character from "../model/charModel.js"
import { getChar } from "../controller/charController.js"

const router = express.Router();

router.get('/', getChar);

export default router;