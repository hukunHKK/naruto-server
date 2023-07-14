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
const router_1 = __importDefault(require("@koa/router"));
const shareWebsite_1 = __importDefault(require("../models/shareWebsite"));
const uuid_1 = require("uuid");
var router = new router_1.default();
router.get('/naruto/shareWebsite/get', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield shareWebsite_1.default.findAll();
    ctx.body = {
        code: 1,
        message: '查询成功',
        data: res
    };
}));
router.post('/naruto/shareWebsite/add', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const res = yield shareWebsite_1.default.findOne({
        where: {
            website: data.website
        }
    });
    if (res) {
        ctx.body = {
            code: 0,
            message: '网站已存在',
            data: null
        };
    }
    else {
        yield shareWebsite_1.default.create(Object.assign(Object.assign({}, data), { id: (0, uuid_1.v4)() }));
        ctx.body = {
            code: 1,
            message: '新增成功',
            data: null
        };
    }
}));
router.post('/naruto/shareWebsite/del', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const res = yield shareWebsite_1.default.destroy({
        where: data
    });
    if (res) {
        ctx.body = {
            code: 1,
            message: '删除成功',
            data: null
        };
    }
    else {
        ctx.body = {
            code: 0,
            message: '错误',
            data: null
        };
    }
}));
exports.default = router;
