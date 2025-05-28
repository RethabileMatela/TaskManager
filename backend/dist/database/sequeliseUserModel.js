"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const sequelize_1 = require("sequelize");
const sequeliseUsers_1 = __importDefault(require("./sequeliseUsers"));
class SequeliseUser extends sequelize_1.Model {
}
SequeliseUser.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: sequeliseUsers_1.default,
    tableName: "users", // Make sure this matches your table name
});
exports.default = SequeliseUser;
exports.users = [];
