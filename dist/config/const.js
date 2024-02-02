"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SATTA_USER_SECRET = exports.SATTA_USER_ID = exports.USER_SECRET = exports.USER_ID = exports.DB_URL = exports.LOCAL_DB_PASSWORD = exports.LOCAL_DB_USERNAME = exports.REFRESH_TOKEN_EXP = exports.REFRESH_TOKEN_SECRET = exports.JWT_EXP = exports.SALT_ROUND = exports.JWT_SECRET = exports.PORT = exports.APP_ENV = exports.getAppEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const getAppEnv = () => {
    const appEnv = process.env.APP_ENV;
    if (appEnv === 'QA') {
        return 'QA';
    }
    if (appEnv === 'DEV') {
        return 'DEV';
    }
    if (appEnv === 'STAGE') {
        return 'STAGE';
    }
    if (appEnv === 'PRODUCTION') {
        return 'PRODUCTION';
    }
    return 'LOCAL';
};
exports.getAppEnv = getAppEnv;
exports.APP_ENV = (0, exports.getAppEnv)();
dotenv_1.default.config({ path: `.env.${exports.APP_ENV.toLocaleLowerCase()}` });
exports.PORT = process.env.PORT || 3000;
exports.JWT_SECRET = process.env.JWT_SECRET || 'JHRG^$%#*YGDHD$#%$';
exports.SALT_ROUND = process.env.SALT_ROUND || '10';
exports.JWT_EXP = process.env.JWT_EXP || '1d';
exports.REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'secret';
exports.REFRESH_TOKEN_EXP = process.env.REFRESH_TOKEN_EXP || '60m';
exports.LOCAL_DB_USERNAME = process.env.LOCAL_DB_USERNAME;
exports.LOCAL_DB_PASSWORD = process.env.LOCAL_DB_PASSWORD;
exports.DB_URL = process.env.DB_URL || '';
exports.USER_ID = process.env.USER_ID || 'dpboss24.in@gmail.com';
exports.USER_SECRET = process.env.USER_SECRET || '(DpBoss)@2023';
exports.SATTA_USER_ID = process.env.USER_ID || 'satta.in@gmail.com';
exports.SATTA_USER_SECRET = process.env.USER_SECRET || '(Satta#@)@2023';
