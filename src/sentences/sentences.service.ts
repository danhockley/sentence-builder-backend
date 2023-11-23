import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Sentence } from './sentence.model'

@Injectable()
export class SentencesService {
    // Constructor to inject the Sentence model
    constructor(
        @InjectModel('Sentence')
        private readonly sentenceModel: Model<Sentence>,
    ) {}

    // Method to retrieve all sentences from the database
    async getAllSentences() {
        return this.sentenceModel.find().exec()
    }

    // Method to create a new sentence in the database
    async createSentence(sentence: string[]) {
        // Create a new Sentence document with the provided words
        const newSentence = new this.sentenceModel({ words: sentence })
        // Save the new sentence to the database
        return newSentence.save()
    }

    // Method to update an existing sentence in the database
    async updateSentence(id: string, sentence: string[]) {
        return this.sentenceModel.findByIdAndUpdate(
            id,
            { words: sentence },
            { new: true },
        )
    }

    // Method to delete a sentence from the database by ID
    async deleteSentence(id: string) {
        return this.sentenceModel.findByIdAndDelete(id)
    }
}
