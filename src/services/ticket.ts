import { TTicketValueSchema } from '../db/models/ticketValue'

export const getDates = () => {
    const date1 = new Date()

    const date2 = new Date()

    date2.setDate(date2.getDate() + 1)

    const formatDate1 = new Date(
        date1.toISOString().split('T')[0] + 'T00:00:00.000Z'
    )

    const formatDate2 = new Date(
        date2.toISOString().split('T')[0] + 'T00:00:00.000Z'
    )

    return { formatDate1, formatDate2 }
}

export const formatTicket = (value1: string, value2: string) => {
    return value1 + value2.split('-')[1] + '-' + value2.split('-')[0]
}

export const ticketTypeValidate = (
    ticketValueData: TTicketValueSchema[],
    type: string
) => {
    const count = ticketValueData.filter((ticket) => {
        console.log({ ticket: ticket.value, type })
        return ticket.type === type
    }).length

    return count < 2 ? true : false
}

export const formatWinningTicketValues = (
    ticketValues: TTicketValueSchema[]
) => {
    const bazzars: { [key: string]: string } = {
        'SUNDAY MILAN NIGHT': '',
        'TIME BAZAR SUNDAY NIGHT': '',
        'SUNDAY MILAN DAY': '',
        'TIME BAZAR SUNDAY': '',
    }

    ticketValues.forEach((ticketValue) => {
        if (!bazzars[ticketValue.type]) {
            bazzars[ticketValue.type] = ticketValue.value
        } else {
            bazzars[ticketValue.type] = formatTicket(
                bazzars[ticketValue.type],
                ticketValue.value
            )
        }
    })

    return bazzars
}
