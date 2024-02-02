"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoIdValidator = exports.videoInsertValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const helper_1 = require("../utils/helper");
exports.videoInsertValidator = joi_1.default.object({
    url: joi_1.default.string()
        .regex(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/)
        .required(),
});
exports.videoIdValidator = joi_1.default.object({
    videoId: helper_1.objectId.required(),
});
