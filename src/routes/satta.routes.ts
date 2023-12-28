import { Router } from 'express'
// import { isAdmin } from '../middlewares/auth.middleware'
import {
    fetchSattaStatusData,
    fetchTicketValueTimeBased,
    insertSattaTicketValue,
} from '../controllers/satta.controller'
import { isSattaAdmin } from '../middlewares/sattaAuth.middleware'

const sattaRouter = Router()

sattaRouter.get('/status', fetchSattaStatusData)

sattaRouter.post('/insert', isSattaAdmin, insertSattaTicketValue)

sattaRouter.get('/fetch-data', fetchTicketValueTimeBased)

export { sattaRouter }
