import mongoose from 'mongoose'

const mongoDbUri = `mongodb+srv://Chris:rZMMev5GztYvTvpg@cluster0.j0oy8.mongodb.net/?retryWrites=true&w=majority`

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDbUri)
        // eslint-disable-next-line
        console.log(`\n\n----------- MongoDB Connected --------------\n\n`)

        return conn
    } catch (err) {
        // eslint-disable-next-line
        console.error(
            `\n\n--------------------❌Error connecting to MongoDb: ${err}-------------------\n\n`,
        )
    }
}

export default connectMongoDB()
