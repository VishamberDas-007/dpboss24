"use strict";
// import { config } from "dotenv";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("./server"));
const const_1 = require("./config/const");
// import listEndpoints from 'express-list-endpoints'
const ws_1 = __importDefault(require("ws"));
const http_1 = __importDefault(require("http"));
console.log((0, const_1.getAppEnv)(), const_1.DB_URL);
const publicPath = express_1.default.static('public');
const app = (0, express_1.default)();
app.use('/public', publicPath);
new server_1.default(app);
const server = http_1.default.createServer(app);
// console.log(listEndpoints(app))
const wss = new ws_1.default.Server({ server });
let timerInterval;
let timerValue = 60;
function startTimer() {
    timerInterval = setInterval(() => {
        --timerValue;
        // Broadcast timer value to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === ws_1.default.OPEN) {
                client.send(JSON.stringify({ timerValue }));
            }
        });
        if (timerValue <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            timerValue = 60; // Reset timer value
        }
    }, 1000); // Update timer every second
}
wss.on('connection', (ws) => {
    // Send the current timer value to newly connected clients
    ws.send(JSON.stringify({ timerValue }));
    console.log('🚀 ~ wss.on ~ timerValue:', timerValue);
    ws.on('message', (message) => {
        if (message.toString() === 'restartTimer') {
            // Restart the timer
            clearInterval(timerInterval);
            timerInterval = null;
            timerValue = 60;
            console.log('Execute hua hai');
            startTimer();
        }
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
// Start the timer only if it's not already running
if (!timerInterval) {
    startTimer();
}
server.listen(const_1.PORT, () => {
    console.log(`server is running on port ${const_1.PORT}`);
});
