import { Controller, Logger, Get, Param } from '@nestjs/common'
import { WordsService } from './words.service'

@Controller('words')
export class WordsController {
    private logger = new Logger('WordsController')
    constructor(
        private readonly wordsService: WordsService, // private readonly logger: Logger,
    ) {}

    // Handler for GET requests to retrieve all word types
    @Get('types')
    getWordTypes() {
        console.log('hello')
        const wordTypes = this.wordsService.getWordTypes()
        // Log the retrieved word types
        this.logger.log('Word Types: ' + JSON.stringify(wordTypes))
        return wordTypes
    }

    // Handler for GET requests to retrieve words by a specific type
    @Get(':wordType')
    getWordsByType(@Param('wordType') wordType: string) {
        const words = this.wordsService.getWordsByType(wordType)
        // Log the retrieved words by type
        this.logger.log(`Words for type ${wordType}: ${JSON.stringify(words)}`)
        return words
    }
}
