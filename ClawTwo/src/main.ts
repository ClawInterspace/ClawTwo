import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConsoleLogger } from '@nestjs/common'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { abortOnError: false })

  const config: ConfigService = app.get(ConfigService)
  const port: number = config.get<number>('PORT')
  const logger: ConsoleLogger = new ConsoleLogger()

  await app.listen(port, () => {
    logger.log('[WEB]', config.get<string>('BASE_URL'))
  })
}
bootstrap()
