import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { WordsModule } from './words/words.module'
import { SentencesModule } from './sentences/sentences.module'

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://danhockley1:06ymj6tqHJWDjCG2@sentencebuilder.fgmnxoo.mongodb.net/',
        ),
        WordsModule,
        SentencesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: [],
})
export class AppModule {}
