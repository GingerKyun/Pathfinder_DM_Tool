import roomData from '../model/roomModel.js'

export const getRoom = async (req, res) => {
    try {
        const allRoom = await roomData.find();
        res.status(200).json(allRoom);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createRoom = async (req, res) => {
    const room = req.body;
    const newRoom = new roomData(room);

    try {
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const findRoom = async (req, res) => {
    const {roomID} = req.params;
    try {
        const room = await roomData.findOne({_id: roomID})
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}