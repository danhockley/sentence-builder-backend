import { Controller, Get, Param } from '@nestjs/common'
import { WordsService } from './words.service'

// Controller decorator with the base path 'words'
@Controller('words')
export class WordsController {
    // Constructor to inject the WordsService
    constructor(private readonly wordsService: WordsService) {}

    // Handler for GET requests to retrieve all word types
    @Get('types')
    getWordTypes() {
        // Call the WordsService to get all word types
        const wordTypes = this.wordsService.getWordTypes()
        // Log the retrieved word types to the console
        console.log('Word Types:', wordTypes)
        // Return the word types to the client
        return wordTypes
    }

    // Handler for GET requests to retrieve words by a specific type
    @Get(':wordType')
    getWordsByType(@Param('wordType') wordType: string) {
        // Call the WordsService to get words by the specified type
        return this.wordsService.getWordsByType(wordType)
    }
}
