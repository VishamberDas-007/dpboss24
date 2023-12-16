"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_S_0001 = exports.AUTH_E_0001 = void 0;
const global_types_1 = require("../../types/global.types");
exports.AUTH_E_0001 = {
    type: global_types_1.RESPONSE_TYPE.ERROR,
    code: 'AUTH_E_0001',
    isNotify: false,
    message: 'Invalid credential',
    statusCode: 403,
};
exports.AUTH_S_0001 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'AUTH_S_0001',
    isNotify: false,
    message: 'Login successful',
    statusCode: 200,
};
