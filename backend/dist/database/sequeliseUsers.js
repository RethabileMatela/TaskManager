"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sqlite3_1 = require("sqlite3");
const fs_1 = __importDefault(require("fs"));
const databasePath = './users.db';
if (!fs_1.default.existsSync(databasePath)) {
    fs_1.default.writeFileSync(databasePath, ''); // Create an empty database file if it doesn't exist
}
const sequelizeUsersDatabase = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './users.db', // Specify the database file
    dialectOptions: {
        mode: sqlite3_1.OPEN_READWRITE, // Open the database in read-write mode
    },
    logging: false,
});
exports.default = sequelizeUsersDatabase;
