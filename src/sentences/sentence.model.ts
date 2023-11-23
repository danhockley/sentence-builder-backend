import * as mongoose from 'mongoose'

// Define the schema for the Sentence model
export const SentenceSchema = new mongoose.Schema({
    // Array of strings representing words in the sentence
    words: [String],
})

// Define the interface for the Sentence document
export interface Sentence extends mongoose.Document {
    // Array of strings representing words in the sentence
    words: string[]
}
