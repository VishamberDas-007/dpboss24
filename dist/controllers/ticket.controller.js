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
exports.insertTicketValue = exports.fetchStatusData = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const validations_1 = __importDefault(require("../validations"));
const ticket_validator_1 = require("../validations/ticket.validator");
const ticket_1 = __importDefault(require("../db/models/ticket"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const ticket_2 = require("../config/responseCodes/ticket");
const ticketValue_1 = __importDefault(require("../db/models/ticketValue"));
const ticket_3 = require("../services/ticket");
const general_1 = require("../config/responseCodes/general");
exports.fetchStatusData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { formatDate1, formatDate2 } = (0, ticket_3.getDates)();
    let ticketValues = [];
    const ticketData = yield ticket_1.default.findOne({
        createdAt: { $gte: formatDate1, $lt: formatDate2 },
    });
    if (ticketData && ticketData.count) {
        ticketValues = yield ticketValue_1.default.find({
            ticketId: ticketData._id,
        });
        // if (ticketValues.length === 2)
        //     winningTicketValue = formatTicket(
        //         ticketValues?.[0]?.value,
        //         ticketValues?.[1]?.value
        //     )
    }
    return (0, responseHandler_1.default)(res, ticket_2.TICKET_S_0001, {
        count: (ticketData === null || ticketData === void 0 ? void 0 : ticketData.count) || 0,
        winningTicketValue: (0, ticket_3.formatWinningTicketValues)(ticketValues),
        ticketValues,
    });
}));
exports.insertTicketValue = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user)
        throw new AppError_1.default(general_1.GENERAL_E_0007);
    yield (0, validations_1.default)(ticket_validator_1.insertTicketValueValidator, req.body);
    const { type, value } = req.body;
    const { formatDate1, formatDate2 } = (0, ticket_3.getDates)();
    let ticketData = yield ticket_1.default.findOne({
        createdAt: { $gte: formatDate1, $lt: formatDate2 },
    });
    if (!(ticketData === null || ticketData === void 0 ? void 0 : ticketData.count))
        ticketData = yield ticket_1.default.create({
            count: 1,
            createdAt: formatDate1,
            updatedAt: formatDate1,
        });
    else {
        if (ticketData.count === 8)
            throw new AppError_1.default(ticket_2.TICKET_E_0003);
        const ticketValues = yield ticketValue_1.default.find({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
        });
        const canEnterValue = (0, ticket_3.ticketTypeValidate)(ticketValues, type);
        if (!canEnterValue) {
            throw new AppError_1.default(ticket_2.TICKET_E_0002);
        }
        yield ticket_1.default.updateOne({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
        }, {
            count: ++ticketData.count,
        });
        // else throw new AppError(TICKET_E_0002)
    }
    const ticketValueData = yield ticketValue_1.default.create({
        ticketId: ticketData._id,
        type,
        value,
        createdAt: formatDate1,
        updatedAt: formatDate1,
    });
    return (0, responseHandler_1.default)(res, ticket_2.TICKET_S_0002, ticketValueData);
}));
