"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const const_1 = require("../config/const");
const ticket_routes_1 = require("./ticket.routes");
const auth_routes_1 = require("./auth.routes");
const satta_routes_1 = require("./satta.routes");
const video_routes_1 = require("./video.routes");
const mainRouter = (0, express_1.Router)();
exports.mainRouter = mainRouter;
mainRouter.use('/video', video_routes_1.videoRouter);
mainRouter.use('/satta', satta_routes_1.sattaRouter);
mainRouter.use('/ticket', ticket_routes_1.ticketRouter);
mainRouter.use('/auth', auth_routes_1.authRouter);
mainRouter.get('/test', (req, res) => {
    return res.json({
        name: 'dpboss24 backend ',
        version: '1.0.0',
        message: 'Welcome to the dpboss24 backend',
        server: const_1.APP_ENV,
    });
});
