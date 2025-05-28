"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const uuid_1 = require("uuid");
const sequeliseUserModel_1 = __importDefault(require("../../database/sequeliseUserModel"));
// Create a user
const createUser = (req, res, next) => {
    try {
        const { name, role } = req.body;
        sequeliseUserModel_1.default.create({ id: (0, uuid_1.v4)(), role, name })
            .then((newUser) => {
            res.status(201).json(newUser);
        })
            .catch((error) => {
            next(error);
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createUser = createUser;
// Read all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await sequeliseUserModel_1.default.findAll();
        console.log("Users fetched:", users);
        res.json(users);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllUsers = getAllUsers;
// Read a single user
const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await sequeliseUserModel_1.default.findOne({ where: { id } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    }
    catch (error) {
        next(error);
    }
};
exports.getUserById = getUserById;
// Update a user
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, role } = req.body;
        const user = await sequeliseUserModel_1.default.findOne({ where: { id } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        user.name = name;
        user.role = role;
        await user.save();
        res.json(user);
    }
    catch (error) {
        next(error);
    }
};
exports.updateUser = updateUser;
// Delete a single  user
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await sequeliseUserModel_1.default.findOne({ where: { id } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        await sequeliseUserModel_1.default.destroy({ where: { id } });
        res.json({ message: 'User deleted successfully', user });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteUser = deleteUser;
