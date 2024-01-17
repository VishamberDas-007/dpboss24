import { Router } from 'express'
import {
    deleteVideo,
    fetchVideoList,
    insertVideoUrl,
} from '../controllers/video.controller'

const videoRouter = Router()

videoRouter.post('/insert-url', insertVideoUrl)

videoRouter.get('/list', fetchVideoList)

videoRouter.delete('/delete/:videoId', deleteVideo)

export { videoRouter }
