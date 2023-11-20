import { Injectable } from '@nestjs/common'

@Injectable()
export class WordsService {
    private readonly words: Record<string, string[]> = {
        Noun: ['cat', 'dog', 'house'],
        Verb: ['run', 'jump', 'sing'],
        Adjective: ['happy', 'sad', 'big'],
        Adverb: ['quickly', 'slowly', 'loudly'],
        Pronoun: ['he', 'she', 'it'],
        Preposition: ['in', 'on', 'under'],
        Conjunction: ['and', 'but', 'or'],
        Determiner: ['a', 'an', 'the'],
        Exclamation: ['wow', 'ouch', 'yay'],
    }

    getAllWords() {
        return this.words
    }
}
