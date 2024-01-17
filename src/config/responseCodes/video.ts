import { RESPONSE_TYPE } from '../../types/global.types'

export const VIDEO_E_0001 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'VIDEO_E_0001',
    isNotify: false,
    message: 'Failed to fetch the video',
    statusCode: 400,
}

export const VIDEO_E_0002 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'VIDEO_E_0002',
    isNotify: false,
    message: 'Cannot post same video url',
    statusCode: 409,
}

export const VIDEO_S_0001 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'VIDEO_S_0001',
    isNotify: false,
    message: "You've successfully added video",
    statusCode: 200,
}

export const VIDEO_S_0002 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'VIDEO_S_0002',
    isNotify: false,
    message: 'Video list fetched successfully',
    statusCode: 200,
}

export const VIDEO_S_0003 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'VIDEO_S_0003',
    isNotify: false,
    message: 'Video deleted successfully',
    statusCode: 200,
}
