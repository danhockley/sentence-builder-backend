import { Controller, Get } from '@nestjs/common'
import { WordsService } from './words.service'

@Controller('words')
export class WordsController {
    constructor(private readonly wordsService: WordsService) {}

    @Get()
    getAllWords() {
        return this.wordsService.getAllWords()
    }
}
