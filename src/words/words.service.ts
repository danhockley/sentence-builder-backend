import { Injectable } from '@nestjs/common'

import * as fs from 'fs'

@Injectable()
export class WordsService {
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
            // Read the configuration file synchronously
            const configFile = fs.readFileSync(configPath, 'utf-8')
            // Parse the JSON content of the configuration file
            return JSON.parse(configFile)
        } catch (error) {
            // Handle errors when loading the configuration file
            console.error(`Error loading words configuration: ${error}`)
            // Return an empty object in case of an error
            return {}
        }
    }

    // Method to get all words from the configuration
    getAllWords() {
        return this.words
    }

    // Method to get words of a specific type from the configuration
    getWordsByType(wordType: string): string[] {
        // Normalize the word type (capitalize the first letter, lowercase the rest)
        const normalizedWordType =
            wordType.charAt(0).toUpperCase() + wordType.slice(1).toLowerCase()
        // Return the words of the specified type, or an empty array if not found
        return this.words[normalizedWordType] || []
    }

    // Method to get all word types from the configuration
    getWordTypes(): string[] {
        // Extract and return the keys (word types) from the configuration
        return Object.keys(this.words)
    }
}
