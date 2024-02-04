import { Router } from 'express'
// import { isAdmin } from '../middlewares/auth.middleware'
import {
    fetchSattaStatusData,
    fetchTicketValueTimeBased,
    insertSattaTicketValue,
    updateDisplayStatus,
} from '../controllers/satta.controller'
import { isSattaAdmin } from '../middlewares/sattaAuth.middleware'

const sattaRouter = Router()

sattaRouter.get('/status', fetchSattaStatusData)

sattaRouter.post('/insert', isSattaAdmin, insertSattaTicketValue)

sattaRouter.post('/update/display-status', updateDisplayStatus)

sattaRouter.get('/fetch-data', isSattaAdmin, fetchTicketValueTimeBased)

export { sattaRouter }
