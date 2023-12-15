import mongoose from 'mongoose'
import { DB_URL } from '../config/const'

async function main() {
    await mongoose
        .connect(DB_URL)
        .then(() => {
            console.log('Database connection established')
        })
        .catch((err) => {
            console.log('Error occurred: ' + err)
        })
}

export default main
