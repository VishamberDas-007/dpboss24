// import { config } from "dotenv";

import express from 'express'
import Server from './server'
import { DB_URL, getAppEnv, PORT } from './config/const'
// import listEndpoints from 'express-list-endpoints'

console.log(getAppEnv(), DB_URL)

const publicPath = express.static('public')

const app = express()
app.use('/public', publicPath)
new Server(app)

// console.log(listEndpoints(app))

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
