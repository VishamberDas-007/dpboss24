import mongoose, { Schema } from 'mongoose'

export type TSattaTicketValueSchema = {
    value: string
    schedule: string
}

const SattaTicketValueSchema: Schema = new Schema<TSattaTicketValueSchema>(
    {
        value: { type: String, required: true },
        schedule: { type: String, required: true },
    },
    {
        timestamps: true,
        strict: true,
    }
)

export default mongoose.model<TSattaTicketValueSchema>(
    'sattaTicketValue',
    SattaTicketValueSchema,
    'sattaTicketValue'
)
