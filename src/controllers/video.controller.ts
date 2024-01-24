import catchAsync from '../utils/catchAsync'
import responseHandler from '../utils/responseHandler'
import { Request, Response } from 'express'
import video from '../db/models/video'
import {
    VIDEO_E_0001,
    VIDEO_E_0002,
    VIDEO_S_0001,
    VIDEO_S_0002,
    VIDEO_S_0003,
} from '../config/responseCodes/video'
import validator from '../validations'
import {
    videoIdValidator,
    videoInsertValidator,
} from '../validations/video.validator'
import AppError from '../utils/AppError'
export const insertVideoUrl = catchAsync(
    async (req: Request, res: Response) => {
        await validator(videoInsertValidator, req.body)

        const { url } = req.body

        const urlExists = await video.findOne({
            url,
        })

        if (urlExists) throw new AppError(VIDEO_E_0002)

        const videoData = await video.create({
            url,
        })

        return responseHandler(res, VIDEO_S_0001, videoData)
    }
)

export const fetchVideoList = catchAsync(
    async (req: Request, res: Response) => {
        const videoList = await video.find().sort({
            createdAt: 'desc',
        })

        return responseHandler(res, VIDEO_S_0002, videoList)
    }
)

export const deleteVideo = catchAsync(async (req: Request, res: Response) => {
    await validator(videoIdValidator, req.params)
    const { videoId } = req.params

    const fetchVideo = await video.findOne({
        _id: videoId,
    })

    if (!fetchVideo) throw new AppError(VIDEO_E_0001)

    await video.deleteOne({
        _id: videoId,
    })

    return responseHandler(res, VIDEO_S_0003)
})
