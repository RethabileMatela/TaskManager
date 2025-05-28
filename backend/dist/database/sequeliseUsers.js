"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeDatabase = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './users.db', // Specify the database file
    logging: false,
});
exports.default = sequelizeDatabase;
