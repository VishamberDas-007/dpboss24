"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTicketValueValidator = exports.ticketIdValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const helper_1 = require("../utils/helper");
const TYPE = [
    'SUNDAY MILAN NIGHT',
    'TIME BAZAR SUNDAY NIGHT',
    'SUNDAY MILAN DAY',
    'TIME BAZAR SUNDAY',
];
exports.ticketIdValidator = joi_1.default.object({
    ticketId: helper_1.objectId.required(),
});
exports.insertTicketValueValidator = joi_1.default.object({
    type: joi_1.default.valid(...TYPE).required(),
    value: joi_1.default.string().required(),
});
