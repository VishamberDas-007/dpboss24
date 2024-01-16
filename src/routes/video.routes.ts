import { Router } from 'express'
import { fetchVideoList, insertVideoUrl } from '../controllers/video.controller'

const videoRouter = Router()

videoRouter.post('/insert-url', insertVideoUrl)

videoRouter.get('/list', fetchVideoList)

export { videoRouter }
