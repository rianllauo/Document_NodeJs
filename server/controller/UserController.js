import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ status: 404, message: error.message });
    }
};

export const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const createuser = await user.save();
        res.status(201).json(createuser);
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const updateUser = await User.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message });
    }
};
