"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const sequeliseTasks_1 = __importDefault(require("./database/sequeliseTasks"));
const sequeliseUsers_1 = __importDefault(require("./database/sequeliseUsers"));
sequeliseUsers_1.default.sync().then(() => {
    console.log("connect to users table");
});
sequeliseTasks_1.default.sync().then(() => {
    console.log("connect to tasks table");
});
app_1.default.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
// http://localhost:9000/api/users
