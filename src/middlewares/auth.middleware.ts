import { NextFunction, Request, Response } from 'express'
import AppError from '../utils/AppError'
import { GENERAL_E_0007, GENERAL_E_0013 } from '../config/responseCodes/general'
import { TAccessToken } from '../types/global.types'
import catchAsync from '../utils/catchAsync'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/const'

export const isAdmin = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        if (!req.headers.authorization) throw new AppError(GENERAL_E_0013)

        const token = req.headers.authorization.split(' ')[1]

        const decodeTokenDetails = <TAccessToken>jwt.verify(token, JWT_SECRET)

        const { email, isVerified } = decodeTokenDetails

        if (!(email && isVerified)) throw new AppError(GENERAL_E_0007)

        req.user = decodeTokenDetails

        next()
    }
)
