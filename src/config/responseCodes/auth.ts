import { RESPONSE_TYPE } from '../../types/global.types'

export const AUTH_E_0001 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'AUTH_E_0001',
    isNotify: false,
    message: 'Invalid credential',
    statusCode: 403,
}

export const AUTH_S_0001 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'AUTH_S_0001',
    isNotify: false,
    message: 'Login successful',
    statusCode: 200,
}
