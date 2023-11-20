import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SentencesController } from './sentences.controller'
import { SentencesService } from './sentences.service'
import { SentenceSchema } from './sentence.model'

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Sentence', schema: SentenceSchema },
        ]),
    ],
    controllers: [SentencesController],
    providers: [SentencesService],
})
export class SentencesModule {}
