import { Router } from 'express'
import { userLogin, userSattaLogin } from '../controllers/auth.controller'

const authRouter = Router()

authRouter.post('/login', userLogin)

authRouter.post('/satta/login', userSattaLogin)

export { authRouter }
