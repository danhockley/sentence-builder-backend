import { Controller, Get, Param } from '@nestjs/common'
import { WordsService } from './words.service'

@Controller('words')
export class WordsController {
    constructor(private readonly wordsService: WordsService) {}

    @Get(':wordType') // Adjusted to include a parameter for wordType
    getWordsByType(@Param('wordType') wordType: string) {
        return this.wordsService.getWordsByType(wordType)
    }
}
