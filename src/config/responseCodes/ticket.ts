import { RESPONSE_TYPE } from '../../types/global.types'

export const TICKET_E_0001 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'TICKET_E_0001',
    isNotify: false,
    message: 'Failed to fetched status',
    statusCode: 404,
}

export const TICKET_E_0002 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'TICKET_E_0002',
    isNotify: false,
    message: 'Already entered todays value',
    statusCode: 400,
}

export const TICKET_E_0003 = {
    type: RESPONSE_TYPE.ERROR,
    code: 'TICKET_E_0003',
    isNotify: false,
    message: "You've entered both values for each bazzar",
    statusCode: 400,
}

export const TICKET_S_0001 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'TICKET_S_0001',
    isNotify: false,
    message: 'Status fetched successfully',
    statusCode: 200,
}

export const TICKET_S_0002 = {
    type: RESPONSE_TYPE.SUCCESS,
    code: 'TICKET_S_0002',
    isNotify: false,
    message: 'Value inserted successfully',
    statusCode: 200,
}
