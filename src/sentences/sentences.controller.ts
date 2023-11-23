import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common'
import { SentencesService } from './sentences.service'

@Controller('sentences')
export class SentencesController {
    constructor(private readonly sentencesService: SentencesService) {}

    @Get()
    getAllSentences() {
        return this.sentencesService.getAllSentences()
    }

    @Post()
    createSentence(@Body() body: { sentence: string[] }) {
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
        return this.sentencesService.deleteSentence(id)
    }
}
