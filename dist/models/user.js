"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize_2 = __importDefault(require("./sequelize"));
const User = sequelize_2.default.define('user', {
    user_id: {
        // Sequelize module has INTEGER Data_Type.
        type: sequelize_1.default.INTEGER,
        // To increment user_id automatically.
        autoIncrement: true,
        // user_id can not be null.
        allowNull: false,
        // For uniquely identify user.
        primaryKey: true
    },
    id: { type: sequelize_1.default.STRING, allowNull: false },
    name: { type: sequelize_1.default.STRING, allowNull: false },
    nickname: { type: sequelize_1.default.STRING, allowNull: true },
    createdAt: sequelize_1.default.DATE,
    updatedAt: sequelize_1.default.DATE,
});
exports.default = User;
