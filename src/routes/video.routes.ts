import { Router } from 'express'
import { isSattaAdmin } from '../middlewares/sattaAuth.middleware'
import { fetchVideoList, insertVideoUrl } from '../controllers/video.controller'

const videoRouter = Router()

videoRouter.post('/insert-url', isSattaAdmin, insertVideoUrl)

videoRouter.get('/list', fetchVideoList)

export { videoRouter }
