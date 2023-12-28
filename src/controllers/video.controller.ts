import catchAsync from '../utils/catchAsync'
import responseHandler from '../utils/responseHandler'
import { Request, Response } from 'express'
import video from '../db/models/video'
import { VIDEO_S_0001, VIDEO_S_0002 } from '../config/responseCodes/video'

export const insertVideoUrl = catchAsync(
    async (req: Request, res: Response) => {
        const { url, isCurrent } = req.body

        const videoData = await video.create({
            url,
            isCurrent,
        })

        return responseHandler(res, VIDEO_S_0001, videoData)
    }
)

export const fetchVideoList = catchAsync(
    async (req: Request, res: Response) => {
        const videoList = await video.find()

        return responseHandler(res, VIDEO_S_0002, videoList)
    }
)
