import catchAsync from '../utils/catchAsync'
import responseHandler from '../utils/responseHandler'
import { Request, Response } from 'express'
import validator from '../validations'
import { insertTicketValueValidator } from '../validations/ticket.validator'
import ticket from '../db/models/ticket'
import AppError from '../utils/AppError'
import {
    TICKET_E_0002,
    TICKET_E_0003,
    TICKET_S_0001,
    TICKET_S_0002,
} from '../config/responseCodes/ticket'
import { TInsertTicketValue } from './types/ticket'
import ticketValue from '../db/models/ticketValue'
import {
    formatTicket,
    formatWinningTicketValues,
    getDates,
    ticketTypeValidate,
} from '../services/ticket'
import { GENERAL_E_0007 } from '../config/responseCodes/general'

export const fetchStatusData = catchAsync(
    async (req: Request, res: Response) => {
        const { formatDate1, formatDate2 } = getDates()

        let ticketValues: any[] = []
        const ticketData = await ticket.findOne({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
        })

        if (ticketData && ticketData.count) {
            ticketValues = await ticketValue.find({
                ticketId: ticketData._id,
            })

            // if (ticketValues.length === 2)
            //     winningTicketValue = formatTicket(
            //         ticketValues?.[0]?.value,
            //         ticketValues?.[1]?.value
            //     )
        }

        return responseHandler(res, TICKET_S_0001, {
            count: ticketData?.count || 0,
            winningTicketValue: formatWinningTicketValues(ticketValues),
            ticketValues,
        })
    }
)

export const insertTicketValue = catchAsync(
    async (req: Request, res: Response) => {
        if (!req.user) throw new AppError(GENERAL_E_0007)

        await validator(insertTicketValueValidator, req.body)

        const { type, value }: TInsertTicketValue = req.body

        const { formatDate1, formatDate2 } = getDates()

        let ticketData = await ticket.findOne({
            createdAt: { $gte: formatDate1, $lt: formatDate2 },
        })

        if (!ticketData?.count)
            ticketData = await ticket.create({
                count: 1,
                createdAt: formatDate1,
                updatedAt: formatDate1,
            })
        else {
            if (ticketData.count === 8) throw new AppError(TICKET_E_0003)

            const ticketValues = await ticketValue.find({
                createdAt: { $gte: formatDate1, $lt: formatDate2 },
            })

            const canEnterValue = ticketTypeValidate(ticketValues, type)

            if (!canEnterValue) {
                throw new AppError(TICKET_E_0002)
            }

            await ticket.updateOne(
                {
                    createdAt: { $gte: formatDate1, $lt: formatDate2 },
                },
                {
                    count: ++ticketData.count,
                }
            )
            // else throw new AppError(TICKET_E_0002)
        }

        const ticketValueData = await ticketValue.create({
            ticketId: ticketData._id,
            type,
            value,
            createdAt: formatDate1,
            updatedAt: formatDate1,
        })

        return responseHandler(res, TICKET_S_0002, ticketValueData)
    }
)
