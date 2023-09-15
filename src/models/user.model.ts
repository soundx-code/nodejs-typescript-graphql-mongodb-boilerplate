import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema(
    {
        userId: {
            type: String,
        },
        email: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: Boolean,
        },
        mobileNumber: {
            id: String,
            name: String,
        },
        password: {
            id: String,
            name: String,
        },
    },
    {
        timestamps: { createdAt: true },
    },
)

export const UserModel = mongoose.model('User', userSchema)
