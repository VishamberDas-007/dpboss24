"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TICKET_S_0002 = exports.TICKET_S_0001 = exports.TICKET_E_0003 = exports.TICKET_E_0002 = exports.TICKET_E_0001 = void 0;
const global_types_1 = require("../../types/global.types");
exports.TICKET_E_0001 = {
    type: global_types_1.RESPONSE_TYPE.ERROR,
    code: 'TICKET_E_0001',
    isNotify: false,
    message: 'Failed to fetched status',
    statusCode: 404,
};
exports.TICKET_E_0002 = {
    type: global_types_1.RESPONSE_TYPE.ERROR,
    code: 'TICKET_E_0002',
    isNotify: false,
    message: 'Already entered todays value',
    statusCode: 400,
};
exports.TICKET_E_0003 = {
    type: global_types_1.RESPONSE_TYPE.ERROR,
    code: 'TICKET_E_0003',
    isNotify: false,
    message: "You've entered both values for each bazzar",
    statusCode: 400,
};
exports.TICKET_S_0001 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'TICKET_S_0001',
    isNotify: false,
    message: 'Status fetched successfully',
    statusCode: 200,
};
exports.TICKET_S_0002 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'TICKET_S_0002',
    isNotify: false,
    message: 'Value inserted successfully',
    statusCode: 200,
};
