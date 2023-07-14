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
const users = [
    {
        id: (0, uuid_1.v4)(),
        name: '张良宇',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '董君瑀',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '陈文浩',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '胡坤',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '孔伟龙',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '涂文博',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '周文杰',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '周茂',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '杨畅',
    },
    {
        id: (0, uuid_1.v4)(),
        name: '李周华',
    },
];
const initData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield User.sync();
    const count = yield User.count();
    if (count === 0) {
        users.forEach(item => User.create(item));
    }
});
initData();
exports.default = User;
