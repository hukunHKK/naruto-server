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
const user_1 = __importDefault(require("../models/user"));
// import geoip from 'geoip-lite'
// var ip = "112.95.173.169";
// var geo = geoip.lookup(ip);
// console.log(geo);
const router = new router_1.default();
router.post('/naruto/user/login', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = ctx.request.body;
        const res = yield user_1.default.findOne({
            where: { name }
        });
        if (res) {
            ctx.body = {
                code: 1,
                message: '登录成功',
            };
        }
        else {
            ctx.body = {
                code: 0,
                message: '查无此人',
            };
        }
    });
});
exports.default = router;
