"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize_2 = __importDefault(require("./sequelize"));
const uuid_1 = require("uuid");
const Website = sequelize_2.default.define('website', {
    site_id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id: { type: sequelize_1.default.STRING, allowNull: false },
    website: { type: sequelize_1.default.STRING, allowNull: false },
    protocol: { type: sequelize_1.default.STRING, allowNull: false },
    remark: { type: sequelize_1.default.STRING, allowNull: true },
    createUser: { type: sequelize_1.default.STRING, allowNull: false },
    createdAt: sequelize_1.default.DATE,
    updatedAt: sequelize_1.default.DATE,
});
const websites = [
    {
        id: (0, uuid_1.v4)(),
        website: 'www.ikun370.xyz/index.html',
        protocol: 'https://',
        createUser: '胡坤',
    },
    {
        id: (0, uuid_1.v4)(),
        website: '735hsck.cc',
        protocol: 'http://',
        createUser: '胡坤',
    },
];
const initData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Website.sync();
    const count = yield Website.count();
    if (count === 0) {
        websites.forEach(item => Website.create(item));
    }
});
initData();
exports.default = Website;
