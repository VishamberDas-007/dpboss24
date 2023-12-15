import Joi from 'joi'
import jwt from 'jsonwebtoken'
import { JWT_SECRET, JWT_EXP } from '../config/const'

export const objectId = Joi.string().hex().length(24).messages({
    'string.length': 'Invalid objectId type',
    'string.hex': 'Invalid objectId type',
})

export const createAccessToken = (
    userDetails: object,
    expiresIn: string | null = null
) =>
    jwt.sign(userDetails, JWT_SECRET, {
        expiresIn: expiresIn || JWT_EXP,
    })
