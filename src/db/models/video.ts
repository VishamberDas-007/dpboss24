import mongoose, { ObjectId, Schema } from 'mongoose'

export type TVideoSchema = {
    _id: ObjectId
    url: string
}

const VideoSchema: Schema = new Schema<TVideoSchema>(
    {
        url: { type: String, required: true },
    },
    {
        timestamps: true,
        strict: true,
    }
)

export default mongoose.model<TVideoSchema>('video', VideoSchema, 'video')
