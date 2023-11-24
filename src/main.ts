import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    // Enable CORS
    const corsOptions: CorsOptions = {
        origin: '*', // Allow all domains // Update with your frontend URL
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }
    app.enableCors(corsOptions)

    await app.listen(80)
}
bootstrap()
