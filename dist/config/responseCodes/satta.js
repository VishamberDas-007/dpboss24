"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SATTA_S_0002 = exports.SATTA_S_0001 = exports.SATTA_E_0002 = exports.SATTA_E_0001 = void 0;
const global_types_1 = require("../../types/global.types");
exports.SATTA_E_0001 = {
    type: global_types_1.RESPONSE_TYPE.ERROR,
    code: 'SATTA_E_0001',
    isNotify: true,
    message: 'All the schedules have been recorded',
    statusCode: 400,
};
exports.SATTA_E_0002 = {
    type: global_types_1.RESPONSE_TYPE.ERROR,
    code: 'SATTA_E_0002',
    isNotify: true,
    message: 'You have already recorded the value for this schedule',
    statusCode: 409,
};
exports.SATTA_S_0001 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'SATTA_S_0001',
    isNotify: true,
    message: 'Your value has been recorded successfully',
    statusCode: 200,
};
exports.SATTA_S_0002 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'SATTA_S_0002',
    isNotify: true,
    message: 'Satta value list fetched successfully',
    statusCode: 200,
};
