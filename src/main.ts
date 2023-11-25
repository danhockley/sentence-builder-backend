import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger, LogLevel } from '@nestjs/common'
import { LoggerInterceptor } from './utils/logger.interceptor'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'
import * as dotenv from 'dotenv'

dotenv.config()

async function bootstrap() {
    const logger = new Logger('bootstrap')

    const isProduction = process.env.NODE_ENV === 'production'
    const logLevels: LogLevel[] = isProduction
        ? ['error', 'warn', 'log']
        : ['error', 'warn', 'log', 'verbose', 'debug']

    const app = await NestFactory.create(AppModule, { logger: logLevels })

    app.useGlobalInterceptors(new LoggerInterceptor())

    const corsOptions: CorsOptions = {
        origin: '*', // Allow all domains
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }
    app.enableCors(corsOptions)

    const port = process.env.PORT || 3000

    await app.listen(port)

    logger.log(`Application listening on port ${port}`)
}
bootstrap()
