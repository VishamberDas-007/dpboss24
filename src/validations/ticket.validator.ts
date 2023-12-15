import Joi from 'joi'
import { TTicketValueSchema } from '../db/models/ticketValue'
import { objectId } from '../utils/helper'

const TYPE = [
    'SUNDAY MILAN NIGHT',
    'TIME BAZAR SUNDAY NIGHT',
    'SUNDAY MILAN DAY',
    'TIME BAZAR SUNDAY',
]

export const ticketIdValidator = Joi.object({
    ticketId: objectId.required(),
})

export const insertTicketValueValidator = Joi.object<TTicketValueSchema>({
    type: Joi.valid(...TYPE).required(),
    value: Joi.string().required(),
})
