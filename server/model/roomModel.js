import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
    name: String,
    host: String,
})

const Room = mongoose.model('Room', roomSchema);

export default Room;