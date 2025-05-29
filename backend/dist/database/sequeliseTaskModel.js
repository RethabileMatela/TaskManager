"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequeliseUsers_1 = __importDefault(require("./sequeliseUsers"));
class SequeliseTask extends sequelize_1.Model {
}
SequeliseTask.init({
    taskId: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    createdById: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: sequeliseUsers_1.default,
    tableName: "tasks", // Make sure this matches your table name
});
exports.default = SequeliseTask;
