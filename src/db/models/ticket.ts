import mongoose, { ObjectId, Schema } from 'mongoose'

export type TTicketSchema = {
    _id: ObjectId
    count: number
}

const TicketSchema: Schema = new Schema<TTicketSchema>(
    {
        count: { type: Number, required: true },
    },
    {
        timestamps: true,
        strict: true,
    }
)

export default mongoose.model<TTicketSchema>('ticket', TicketSchema, 'ticket')
