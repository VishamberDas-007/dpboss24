import { Request, Response } from 'express'
import sattaTicketValue from '../db/models/sattaTicketValue'
import catchAsync from '../utils/catchAsync'
import validator from '../validations'
import responseHandler from '../utils/responseHandler'
import {
    SATTA_S_0001,
    SATTA_S_0002,
    SATTA_E_0001,
} from '../config/responseCodes/satta'
import { insertSattaTicketValueValidator } from '../validations/satta.validator'
import { getDates } from '../services/ticket'
import AppError from '../utils/AppError'

export const insertSattaTicketValue = catchAsync(
    async (req: Request, res: Response) => {
        await validator(insertSattaTicketValueValidator, req.body)

        const {
            ticketValue,
            createdAt,
        }: { ticketValue: string; createdAt: string } = req.body

        const { formatDate1, formatDate2 } = getDates()

        const fetchAllSattaValue = await sattaTicketValue.find({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
        })

        if (fetchAllSattaValue.length === 12) throw new AppError(SATTA_E_0001)

        const result = await sattaTicketValue.create({
            value: ticketValue,
            createdAt,
        })

        return responseHandler(res, SATTA_S_0001, result)
    }
)

export const fetchSattaStatusData = catchAsync(
    async (req: Request, res: Response) => {
        const { formatDate1, formatDate2 } = getDates()

        const fetchSattaValueList = await sattaTicketValue.find({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
        })

        return responseHandler(res, SATTA_S_0002, fetchSattaValueList)
    }
)

export const fetchTicketValueTimeBased = catchAsync(
    async (req: Request, res: Response) => {
        
        const { formatDate1, formatDate2 } = getDates()

        const fetchSattaValueList = await sattaTicketValue.find({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
        })

        return responseHandler(res, SATTA_S_0002, fetchSattaValueList)
    }
)