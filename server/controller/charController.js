import charData from "../model/charModel.js";

export const getChar = async (req, res) => {
    try {
        const allChar = await charData.find();

        res.status(200).json(allChar);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createCharacter = async (req, res) => {
    const character = req.body;
    const newCharacter = new charData(character);

    try {
        await newCharacter.save();
        res.status(201).json(newCharacter);
    } catch (error) {
        res.status(409).json({ message: error.message })     
    }
}