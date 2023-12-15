import { Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import validator from '../validations'
import { loginValidator } from '../validations/auth.validator'
import { USER_ID, USER_SECRET } from '../config/const'
import AppError from '../utils/AppError'
import { AUTH_E_0001, AUTH_S_0001 } from '../config/responseCodes/auth'
import { TAccessToken } from '../types/global.types'
import { createAccessToken } from '../utils/helper'
import responseHandler from '../utils/responseHandler'

export const userLogin = catchAsync(async (req: Request, res: Response) => {
    await validator(loginValidator, req.body)

    const { email, password } = req.body

    if (!(email == USER_ID && password === USER_SECRET))
        throw new AppError(AUTH_E_0001)

    const tokenObj: TAccessToken = {
        email: email,
        isVerified: true,
    }

    const accessToken = createAccessToken(tokenObj)

    return responseHandler(res, AUTH_S_0001, { accessToken })
})
