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
exports.deleteVideo = exports.fetchVideoList = exports.insertVideoUrl = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const video_1 = __importDefault(require("../db/models/video"));
const video_2 = require("../config/responseCodes/video");
const validations_1 = __importDefault(require("../validations"));
const video_validator_1 = require("../validations/video.validator");
const AppError_1 = __importDefault(require("../utils/AppError"));
exports.insertVideoUrl = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, validations_1.default)(video_validator_1.videoInsertValidator, req.body);
    const { url } = req.body;
    const urlExists = yield video_1.default.findOne({
        url,
    });
    if (urlExists)
        throw new AppError_1.default(video_2.VIDEO_E_0002);
    const videoData = yield video_1.default.create({
        url,
    });
    return (0, responseHandler_1.default)(res, video_2.VIDEO_S_0001, videoData);
}));
exports.fetchVideoList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoList = yield video_1.default.find().sort({
        createdAt: 'desc',
    });
    return (0, responseHandler_1.default)(res, video_2.VIDEO_S_0002, videoList);
}));
exports.deleteVideo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, validations_1.default)(video_validator_1.videoIdValidator, req.params);
    const { videoId } = req.params;
    const fetchVideo = yield video_1.default.findOne({
        _id: videoId,
    });
    if (!fetchVideo)
        throw new AppError_1.default(video_2.VIDEO_E_0001);
    yield video_1.default.deleteOne({
        _id: videoId,
    });
    return (0, responseHandler_1.default)(res, video_2.VIDEO_S_0003);
}));
