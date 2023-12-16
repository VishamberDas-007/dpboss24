"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("joi");
const responseHandler_1 = __importDefault(require("./responseHandler"));
const general_1 = require("../config/responseCodes/general");
const AppError_1 = __importDefault(require("./AppError"));
exports.default = (err, req, res, next) => {
    var _a;
    if (err instanceof joi_1.ValidationError) {
        return (0, responseHandler_1.default)(res, general_1.GENERAL_E_0001, null, err.message);
    }
    if (err instanceof AppError_1.default) {
        if (((_a = err === null || err === void 0 ? void 0 : err.code) === null || _a === void 0 ? void 0 : _a.split('_')[0]) === 'TOKEN' && err.type === 'ERROR') {
            return (0, responseHandler_1.default)(res, err);
        }
        if ((err === null || err === void 0 ? void 0 : err.code) === 'LIMIT_FILE_SIZE') {
            return (0, responseHandler_1.default)(res, general_1.GENERAL_E_0004);
        }
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return (0, responseHandler_1.default)(res, general_1.GENERAL_E_0005);
        }
        return (0, responseHandler_1.default)(res, err, err === null || err === void 0 ? void 0 : err.result);
    }
    (0, responseHandler_1.default)(res, general_1.GENERAL_E_0002);
    return next();
};
