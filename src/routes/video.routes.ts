import { Router } from 'express'
import {
    deleteVideo,
    fetchVideoList,
    insertVideoUrl,
} from '../controllers/video.controller'
import { isSattaAdmin } from '../middlewares/sattaAuth.middleware'

const videoRouter = Router()

videoRouter.post('/insert-url', isSattaAdmin, insertVideoUrl)

videoRouter.get('/list', fetchVideoList)

videoRouter.delete('/delete/:videoId', isSattaAdmin, deleteVideo)

export { videoRouter }
