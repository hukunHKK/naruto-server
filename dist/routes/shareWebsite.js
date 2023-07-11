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
const shareWebsite_json_1 = __importDefault(require("../data/shareWebsite.json"));
const router_1 = __importDefault(require("@koa/router"));
var router = new router_1.default();
router.get('/naruto/shareWebsite/get', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(next);
    ctx.body = {
        code: 1,
        message: '查询成功',
        data: shareWebsite_json_1.default
    };
}));
exports.default = router;
