import { Injectable, Logger } from '@nestjs/common'
import * as fs from 'fs'

@Injectable()
export class WordsService {
    private logger = new Logger('WordsService')

    // Private property to store words loaded from the configuration
    private readonly words: Record<string, string[]>

    // Constructor to load words from the configuration file on service instantiation
    constructor() {
        const configPath = './config/words.config.json'
        this.words = this.loadWordsFromConfig(configPath)
    }

    // Private method to load words from the configuration file
    private loadWordsFromConfig(configPath: string): Record<string, string[]> {
        try {
            console.log('hello')
            // Read and parse the configuration file
            const configFile = fs.readFileSync(configPath, 'utf-8')
            this.logger.log('Words loaded successfully') // Log success
            return JSON.parse(configFile)
        } catch (error) {
            // Log an error message if there is an issue loading the configuration
            const errorMessage = `Error loading words configuration: ${error}`
            this.logger.error(errorMessage, (error as Error).stack || '')
            return {}
        }
    }

    // Method to get all words from the configuration
    getAllWords() {
        this.logger.log('Getting all words.')
        return this.words
    }

    // Method to get words of a specific type from the configuration
    getWordsByType(wordType: string): string[] {
        // Normalize the word type (capitalize the first letter, lowercase the rest)
        const normalizedWordType =
            wordType.charAt(0).toUpperCase() + wordType.slice(1).toLowerCase()
        this.logger.log(`Getting words for type: ${normalizedWordType}`)
        return this.words[normalizedWordType] || []
    }

    // Method to get all word types from the configuration
    getWordTypes(): string[] {
        this.logger.log('Getting all word types.')
        return Object.keys(this.words)
    }
}
