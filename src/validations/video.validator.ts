import Joi from 'joi'
import { objectId } from '../utils/helper'

export const videoInsertValidator = Joi.object({
    url: Joi.string()
        .regex(
            /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/
        )
        .required(),
})

export const videoIdValidator = Joi.object({
    videoId: objectId.required(),
})
