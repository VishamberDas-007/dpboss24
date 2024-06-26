"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sattaRouter = void 0;
const express_1 = require("express");
// import { isAdmin } from '../middlewares/auth.middleware'
const satta_controller_1 = require("../controllers/satta.controller");
const sattaAuth_middleware_1 = require("../middlewares/sattaAuth.middleware");
const sattaRouter = (0, express_1.Router)();
exports.sattaRouter = sattaRouter;
sattaRouter.get('/status', satta_controller_1.fetchSattaStatusData);
sattaRouter.post('/insert', sattaAuth_middleware_1.isSattaAdmin, satta_controller_1.insertSattaTicketValue);
sattaRouter.post('/update/display-status', satta_controller_1.updateDisplayStatus);
sattaRouter.get('/fetch-data', sattaAuth_middleware_1.isSattaAdmin, satta_controller_1.fetchTicketValueTimeBased);
sattaRouter.get('/user/table-data', satta_controller_1.fetchUserTableData);
sattaRouter.get('/admin/table-data', sattaAuth_middleware_1.isSattaAdmin, satta_controller_1.fetchAdminTableData);
