import { Router } from 'express'
import { userLogin } from '../controllers/auth.controller'

const authRouter = Router()

authRouter.post('/login', userLogin)

export { authRouter }
