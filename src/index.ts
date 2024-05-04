// import { config } from "dotenv";

import express from 'express'
import Server from './server'
import { DB_URL, getAppEnv, PORT } from './config/const'
// import listEndpoints from 'express-list-endpoints'
import webSocket from 'ws'
import http from 'http'

console.log(getAppEnv(), DB_URL)

const publicPath = express.static('public')

const app = express()
app.use('/public', publicPath)
new Server(app)
const server = http.createServer(app)
// console.log(listEndpoints(app))
const wss = new webSocket.Server({ server })

let timerInterval: any
let timerValue = 60

function startTimer() {
    timerInterval = setInterval(() => {
        --timerValue
        // Broadcast timer value to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === webSocket.OPEN) {
                client.send(JSON.stringify({ timerValue }))
            }
        })

        if (timerValue <= 0) {
            clearInterval(timerInterval)
            timerInterval = null
            timerValue = 60 // Reset timer value
        }
    }, 1000) // Update timer every second
}

wss.on('connection', (ws) => {
    // Send the current timer value to newly connected clients
    ws.send(JSON.stringify({ timerValue }))
    console.log('🚀 ~ wss.on ~ timerValue:', timerValue)

    ws.on('message', (message) => {
        if (message.toString() === 'restartTimer') {
            // Restart the timer
            clearInterval(timerInterval)
            timerInterval = null
            timerValue = 60
            console.log('Execute hua hai')
            startTimer()
        }
    })

    ws.on('close', () => {
        console.log('Client disconnected')
    })
})

// Start the timer only if it's not already running
if (!timerInterval) {
    startTimer()
}

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
