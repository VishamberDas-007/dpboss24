import { RESPONSE_TYPE } from '../../types/global.types'

export const SATTA_E_0001 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'SATTA_E_0001',
    isNotify: true,
    message: 'Your value has been recorded successfully',
    statusCode: 200,
}

export const SATTA_S_0001 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'SATTA_S_0001',
    isNotify: true,
    message: 'Your value has been recorded successfully',
    statusCode: 200,
}

export const SATTA_S_0002 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'SATTA_S_0002',
    isNotify: true,
    message: 'Satta value list fetched successfully',
    statusCode: 200,
}
