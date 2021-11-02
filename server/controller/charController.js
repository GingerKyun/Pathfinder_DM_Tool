import charData from "../model/charModel.js";

export const getChar = async (req, res) => {
    try {
        const allChar = await charData.find();

        res.status(200).json(allChar);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}