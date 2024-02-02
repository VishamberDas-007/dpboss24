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
exports.fetchTicketValueTimeBased = exports.fetchSattaStatusData = exports.insertSattaTicketValue = void 0;
const sattaTicketValue_1 = __importDefault(require("../db/models/sattaTicketValue"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const validations_1 = __importDefault(require("../validations"));
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const satta_1 = require("../config/responseCodes/satta");
const satta_validator_1 = require("../validations/satta.validator");
const ticket_1 = require("../services/ticket");
const AppError_1 = __importDefault(require("../utils/AppError"));
exports.insertSattaTicketValue = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, validations_1.default)(satta_validator_1.insertSattaTicketValueValidator, req.body);
    const { ticketValue, createdAt, schedule, } = req.body;
    const { formatDate1, formatDate2 } = (0, ticket_1.getDates)();
    const fetchAllSattaValue = (yield sattaTicketValue_1.default.find({
        createdAt: { $gte: formatDate1, $lt: formatDate2 },
    })).map((data) => data.toJSON());
    if (fetchAllSattaValue.length === 12)
        throw new AppError_1.default(satta_1.SATTA_E_0001);
    else if (fetchAllSattaValue.find((item) => item.schedule === schedule))
        throw new AppError_1.default(satta_1.SATTA_E_0002);
    const result = yield sattaTicketValue_1.default.create({
        value: ticketValue,
        schedule,
        createdAt,
    });
    return (0, responseHandler_1.default)(res, satta_1.SATTA_S_0001, result);
}));
exports.fetchSattaStatusData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { formatDate1, formatDate2 } = (0, ticket_1.getDates)();
    const fetchSattaValueList = yield sattaTicketValue_1.default.find({
        createdAt: { $gte: formatDate1, $lt: formatDate2 },
    });
    return (0, responseHandler_1.default)(res, satta_1.SATTA_S_0002, fetchSattaValueList);
}));
exports.fetchTicketValueTimeBased = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { formatDate1, formatDate2 } = (0, ticket_1.getDates)();
    const fetchSattaValueList = (yield sattaTicketValue_1.default.find({
        createdAt: { $gte: formatDate1, $lt: formatDate2 },
    })).map((data) => (Object.assign(Object.assign({}, data.toJSON()), { _id: undefined })));
    return (0, responseHandler_1.default)(res, satta_1.SATTA_S_0002, fetchSattaValueList);
}));
