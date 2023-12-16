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
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./db"));
const errorHandler_1 = __importDefault(require("./utils/errorHandler"));
class Server {
    constructor(app) {
        this.config(app);
    }
    config(app) {
        return __awaiter(this, void 0, void 0, function* () {
            app.use((0, express_1.urlencoded)({ extended: true }));
            app.use((0, morgan_1.default)('dev'));
            app.use((0, express_1.json)());
            app.use((0, cors_1.default)());
            yield (0, db_1.default)();
            app.use('/api', routes_1.mainRouter);
            app.use(errorHandler_1.default);
        });
    }
}
exports.default = Server;
