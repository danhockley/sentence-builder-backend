import { Injectable } from '@nestjs/common'
import * as fs from 'fs'

@Injectable()
export class WordsService {
    private readonly words: Record<string, string[]>

    constructor() {
        const configPath = './config/words.config.json'
        this.words = this.loadWordsFromConfig(configPath)
    }

    private loadWordsFromConfig(configPath: string): Record<string, string[]> {
        try {
            const configFile = fs.readFileSync(configPath, 'utf-8')
            return JSON.parse(configFile)
        } catch (error) {
            console.error(`Error loading words configuration: ${error}`)
            return {}
        }
    }

    getAllWords() {
        return this.words
    }

    getWordsByType(wordType: string): string[] {
        const normalizedWordType =
            wordType.charAt(0).toUpperCase() + wordType.slice(1).toLowerCase()
        return this.words[normalizedWordType] || []
    }

    getWordTypes(): string[] {
        // Extract and return the keys (word types) from the configuration
        return Object.keys(this.words)
    }
}
