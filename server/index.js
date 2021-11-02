import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import charRoutes from "./routes/charRoutes.js"
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({ limit: '50mb', extended: true}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/api/v1/characters', charRoutes);

const CONNECTION_URL=process.env.CHARACTERS_DB_URI
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`Connection Success! Port: ${PORT}`)
)).catch((err) => console.log(err.message));