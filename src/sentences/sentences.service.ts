import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Sentence } from './sentence.model'

@Injectable()
export class SentencesService {
    constructor(
        @InjectModel('Sentence')
        private readonly sentenceModel: Model<Sentence>,
    ) {}

    async getAllSentences() {
        return this.sentenceModel.find().exec()
    }

    async createSentence(sentence: string[]) {
        const newSentence = new this.sentenceModel({ words: sentence })
        return newSentence.save()
    }

    async updateSentence(id: string, sentence: string[]) {
        return this.sentenceModel.findByIdAndUpdate(
            id,
            { words: sentence },
            { new: true },
        )
    }

    async deleteSentence(id: string) {
        return this.sentenceModel.findByIdAndDelete(id)
    }
}
