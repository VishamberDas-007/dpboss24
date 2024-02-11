import { Request, Response } from 'express'
import sattaTicketValue from '../db/models/sattaTicketValue'
import catchAsync from '../utils/catchAsync'
import validator from '../validations'
import responseHandler from '../utils/responseHandler'
import {
    SATTA_S_0001,
    SATTA_S_0002,
    SATTA_E_0001,
    SATTA_E_0002,
    SATTA_S_0003,
    SATTA_S_0004,
} from '../config/responseCodes/satta'
import {
    insertSattaTicketValueValidator,
    sattaIdValidator,
} from '../validations/satta.validator'
import { getDates } from '../services/ticket'
import AppError from '../utils/AppError'

export const insertSattaTicketValue = catchAsync(
    async (req: Request, res: Response) => {
        await validator(insertSattaTicketValueValidator, req.body)

        const {
            ticketValue,
            createdAt,
            schedule,
        }: { ticketValue: string; schedule: string; createdAt: string } =
            req.body

        const { formatDate1, formatDate2 } = getDates()

        const fetchAllSattaValue = (
            await sattaTicketValue.find({
                createdAt: { $gte: formatDate1, $lt: formatDate2 },
            })
        ).map((data) => data.toJSON())

        if (fetchAllSattaValue.length === 12) throw new AppError(SATTA_E_0001)
        else if (fetchAllSattaValue.find((item) => item.schedule === schedule))
            throw new AppError(SATTA_E_0002)

        const result = await sattaTicketValue.create({
            value: ticketValue,
            schedule,
            createdAt: new Date(),
        })

        return responseHandler(res, SATTA_S_0001, result)
    }
)

export const fetchSattaStatusData = catchAsync(
    async (req: Request, res: Response) => {
        const { formatDate1, formatDate2 } = getDates()

        const fetchSattaValueList = await sattaTicketValue
            .findOne({
                createdAt: { $gte: formatDate1, $lt: formatDate2 },
                isDisplayed: false,
            })
            .sort({
                createdAt: 'desc',
            })

        return responseHandler(res, SATTA_S_0002, fetchSattaValueList)
    }
)

export const updateDisplayStatus = catchAsync(
    async (req: Request, res: Response) => {
        await validator(sattaIdValidator, req.body)
        const { sattaId } = req.body

        await sattaTicketValue.updateOne(
            {
                _id: sattaId,
            },
            {
                isDisplayed: true,
            }
        )

        return responseHandler(res, SATTA_S_0003)
    }
)

export const fetchTicketValueTimeBased = catchAsync(
    async (req: Request, res: Response) => {
        const { formatDate1, formatDate2 } = getDates()

        const fetchSattaValueList = (
            await sattaTicketValue.find({
                createdAt: { $gte: formatDate1, $lt: formatDate2 },
            })
        ).map((data) => ({ ...data.toJSON(), _id: undefined }))

        return responseHandler(res, SATTA_S_0002, fetchSattaValueList)
    }
)

export const fetchUserTableData = catchAsync(
    async (req: Request, res: Response) => {
        const { formatDate1, formatDate2 } = getDates()
        const tableData = await sattaTicketValue.find({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
            isDisplayed: true,
        })

        return responseHandler(res, SATTA_S_0004, tableData)
    }
)

export const fetchAdminTableData = catchAsync(
    async (req: Request, res: Response) => {
        const { formatDate1, formatDate2 } = getDates()
        const tableData = await sattaTicketValue.find({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
        })

        return responseHandler(res, SATTA_S_0004, tableData)
    }
)
