import * as mongoose from 'mongoose'

export const SentenceSchema = new mongoose.Schema({
    words: [String],
})

export interface Sentence extends mongoose.Document {
    words: string[]
}
