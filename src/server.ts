import { Application, json, urlencoded } from 'express'
import cors from 'cors'
import { mainRouter } from './routes'
import morgan from 'morgan'
import db from './db'

import errorHandler from './utils/errorHandler'
export default class Server {
    constructor(app: Application) {
        this.config(app)
    }

    public async config(app: Application): Promise<void> {
        app.use(urlencoded({ extended: true }))
        app.use(morgan('dev'))

        app.use(json())

        app.use(cors())

        await db()

        app.use('/dpboss/api', mainRouter)

        app.use(errorHandler)
    }
}
