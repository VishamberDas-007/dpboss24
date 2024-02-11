import { Router } from 'express'
// import { isAdmin } from '../middlewares/auth.middleware'
import {
    fetchAdminTableData,
    fetchSattaStatusData,
    fetchTicketValueTimeBased,
    fetchUserTableData,
    insertSattaTicketValue,
    updateDisplayStatus,
} from '../controllers/satta.controller'
import { isSattaAdmin } from '../middlewares/sattaAuth.middleware'

const sattaRouter = Router()

sattaRouter.get('/status', fetchSattaStatusData)

sattaRouter.post('/insert', isSattaAdmin, insertSattaTicketValue)

sattaRouter.post('/update/display-status', updateDisplayStatus)

sattaRouter.get('/fetch-data', isSattaAdmin, fetchTicketValueTimeBased)

sattaRouter.get('/user/table-data', fetchUserTableData)

sattaRouter.get('/admin/table-data', isSattaAdmin, fetchAdminTableData)

export { sattaRouter }
