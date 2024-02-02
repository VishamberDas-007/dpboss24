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
exports.isSattaAdmin = void 0;
const AppError_1 = __importDefault(require("../utils/AppError"));
const general_1 = require("../config/responseCodes/general");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const const_1 = require("../config/const");
exports.isSattaAdmin = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.headers.authorization)
        throw new AppError_1.default(general_1.GENERAL_E_0013);
    const token = req.headers.authorization.split(' ')[1];
    const decodeTokenDetails = jsonwebtoken_1.default.verify(token, const_1.JWT_SECRET);
    const { email, isVerified } = decodeTokenDetails;
    if (!(email && isVerified))
        throw new AppError_1.default(general_1.GENERAL_E_0007);
    req.user = decodeTokenDetails;
    next();
}));
