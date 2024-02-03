import mongoose, { Schema } from 'mongoose'

export type TSattaTicketValueSchema = {
    value: string
    schedule: string
    isDisplayed: boolean
}

const SattaTicketValueSchema: Schema = new Schema<TSattaTicketValueSchema>(
    {
        value: { type: String, required: true },
        schedule: { type: String, required: true },
        isDisplayed: { type: Boolean, default: false },
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
