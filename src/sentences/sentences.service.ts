import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class SentencesService {
    constructor(
        @InjectModel('Sentence') private readonly sentenceModel: Model<any>,
    ) {}

    async getAllSentences() {
        return this.sentenceModel.find().exec()
    }

    async createSentence(sentence: string[]) {
        const newSentence = new this.sentenceModel({ words: sentence })
        return newSentence.save()
    }
}
