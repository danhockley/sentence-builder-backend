// src/words/words.controller.ts

import { Controller, Get, Param } from '@nestjs/common'
import { WordsService } from './words.service'

@Controller('words')
export class WordsController {
    constructor(private readonly wordsService: WordsService) {}

    @Get(':wordType')
    getWordsByType(@Param('wordType') wordType: string) {
        return this.wordsService.getWordsByType(wordType)
    }

    @Get('types')
    getWordTypes() {
        const wordTypes = this.wordsService.getWordTypes()
        console.log('Word Types:', wordTypes)
        return wordTypes
    }
}
