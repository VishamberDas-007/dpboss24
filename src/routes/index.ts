import { Router } from 'express'
import { APP_ENV } from '../config/const'
import { ticketRouter } from './ticket.routes'
import { authRouter } from './auth.routes'
import { sattaRouter } from './satta.routes'

const mainRouter = Router()

mainRouter.use('/satta', sattaRouter)

mainRouter.use('/ticket', ticketRouter)

mainRouter.use('/auth', authRouter)

mainRouter.get('/test', (req, res) => {
    return res.json({
        name: 'dpboss24 backend ',
        version: '1.0.0',
        message: 'Welcome to the dpboss24 backend',
        server: APP_ENV,
    })
})

export { mainRouter }
