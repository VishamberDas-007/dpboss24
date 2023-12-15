import { Router } from 'express'
import {
    fetchStatusData,
    insertTicketValue,
} from '../controllers/ticket.controller'
import { isAdmin } from '../middlewares/auth.middleware'

const ticketRouter = Router()

ticketRouter.get('/status', fetchStatusData)

ticketRouter.post('/insert', isAdmin, insertTicketValue)

export { ticketRouter }
