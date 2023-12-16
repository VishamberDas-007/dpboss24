"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccessToken = exports.objectId = void 0;
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const const_1 = require("../config/const");
exports.objectId = joi_1.default.string().hex().length(24).messages({
    'string.length': 'Invalid objectId type',
    'string.hex': 'Invalid objectId type',
});
const createAccessToken = (userDetails, expiresIn = null) => jsonwebtoken_1.default.sign(userDetails, const_1.JWT_SECRET, {
    expiresIn: expiresIn || const_1.JWT_EXP,
});
exports.createAccessToken = createAccessToken;
