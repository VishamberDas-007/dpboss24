import mongoose, { ObjectId, Schema } from 'mongoose'

export type TVideoSchema = {
    _id: ObjectId
    url: string
    isCurrent: boolean
}

const VideoSchema: Schema = new Schema<TVideoSchema>(
    {
        url: { type: String, required: true },
        isCurrent: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        strict: true,
    }
)

export default mongoose.model<TVideoSchema>('video', VideoSchema, 'video')
