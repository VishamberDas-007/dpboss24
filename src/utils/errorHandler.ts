import { ValidationError } from 'joi'
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import responseHandler from './responseHandler'
import {
    GENERAL_E_0001,
    GENERAL_E_0002,
    GENERAL_E_0004,
    GENERAL_E_0005,
} from '../config/responseCodes/general'
import AppError from './AppError'

export default (
    err: ErrorRequestHandler | AppError | ValidationError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ValidationError) {
        return responseHandler(res, GENERAL_E_0001, null, err.message)
    }

    if (err instanceof AppError) {
        if (err?.code?.split('_')[0] === 'TOKEN' && err.type === 'ERROR') {
            return responseHandler(res, err)
        }

        if (err?.code === 'LIMIT_FILE_SIZE') {
            return responseHandler(res, GENERAL_E_0004)
        }

        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return responseHandler(res, GENERAL_E_0005)
        }

        return responseHandler(res, err, err?.result)
    }

    responseHandler(res, GENERAL_E_0002)
    return next()
}
