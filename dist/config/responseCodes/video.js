"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VIDEO_S_0003 = exports.VIDEO_S_0002 = exports.VIDEO_S_0001 = exports.VIDEO_E_0002 = exports.VIDEO_E_0001 = void 0;
const global_types_1 = require("../../types/global.types");
exports.VIDEO_E_0001 = {
    type: global_types_1.RESPONSE_TYPE.ERROR,
    code: 'VIDEO_E_0001',
    isNotify: false,
    message: 'Failed to fetch the video',
    statusCode: 400,
};
exports.VIDEO_E_0002 = {
    type: global_types_1.RESPONSE_TYPE.ERROR,
    code: 'VIDEO_E_0002',
    isNotify: true,
    message: 'Cannot post same video url',
    statusCode: 409,
};
exports.VIDEO_S_0001 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'VIDEO_S_0001',
    isNotify: false,
    message: "You've successfully added video",
    statusCode: 200,
};
exports.VIDEO_S_0002 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'VIDEO_S_0002',
    isNotify: false,
    message: 'Video list fetched successfully',
    statusCode: 200,
};
exports.VIDEO_S_0003 = {
    type: global_types_1.RESPONSE_TYPE.SUCCESS,
    code: 'VIDEO_S_0003',
    isNotify: false,
    message: 'Video deleted successfully',
    statusCode: 200,
};
