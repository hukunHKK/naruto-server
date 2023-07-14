"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
let host = 'localhost', port = 3306;
if (process.env.NODE_ENV === 'prd') {
    host = 'naruto-mysql';
    port = 3305;
}
const sequelize = new sequelize_1.Sequelize('naruto', 'root', '123456', {
    host,
    dialect: 'mysql',
    port
});
exports.default = sequelize;
