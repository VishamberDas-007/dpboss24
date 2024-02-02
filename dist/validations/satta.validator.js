"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSattaTicketValueValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.insertSattaTicketValueValidator = joi_1.default.object({
    ticketValue: joi_1.default.string().max(5).required(),
    schedule: joi_1.default.string().required(),
    createdAt: joi_1.default.date().required(),
});
