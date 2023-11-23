import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common'
import { SentencesService } from './sentences.service'

@Controller('sentences')
export class SentencesController {
    constructor(private readonly sentencesService: SentencesService) {}

    // Handler for GET requests to retrieve all sentences
    @Get()
    getAllSentences() {
        return this.sentencesService.getAllSentences()
    }

    // Handler for POST requests to create a new sentence
    @Post()
    createSentence(@Body() body: { sentence: string[] }) {
        // Extract the sentence array from the request body
        const { sentence } = body
        return this.sentencesService.createSentence(sentence)
    }

    @Put(':id')
    updateSentence(
        @Param('id') id: string,
        @Body() body: { sentence: string[] },
    ) {
        const { sentence } = body
        return this.sentencesService.updateSentence(id, sentence)
    }

    @Delete(':id')
    deleteSentence(@Param('id') id: string) {
        // Extract the sentence ID from the request parameters
        return this.sentencesService.deleteSentence(id)
    }
}
