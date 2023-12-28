import Joi from 'joi'

export const insertSattaTicketValueValidator = Joi.object({
    value: Joi.string().max(5).required(),
    createdAt: Joi.date().required(),
})
