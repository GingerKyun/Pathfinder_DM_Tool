import mongoose from "mongoose";

const charSchema = mongoose.Schema({
    playerName: String,
    characterName: String,
    age: String,
    race: String,
    hp: Number,
    ac: Number,
    roomID: mongoose.Schema.Types.ObjectId
})

const char = mongoose.model('char', charSchema);

export default char;