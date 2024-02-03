import Joi from 'joi'

export const insertSattaTicketValueValidator = Joi.object({
    ticketValue: Joi.string().max(5).required(),
    schedule: Joi.string().required(),
    createdAt: Joi.string().required(),
})

export const sattaIdValidator = Joi.object({
    sattaId: Joi.string().required(),
})
