import mongoose, { ObjectId, Schema } from 'mongoose'

export type TTicketValueSchema = {
    ticketId: ObjectId
    type: string
    value: string
}

const TicketValueSchema: Schema = new Schema<TTicketValueSchema>(
    {
        ticketId: { type: mongoose.mongo.ObjectId, required: true },
        type: { type: String, required: true },
        value: { type: String, required: true },
    },
    {
        timestamps: true,
        strict: true,
    }
)

export default mongoose.model<TTicketValueSchema>(
    'ticketValue',
    TicketValueSchema,
    'ticketValue'
)
