import { Module } from '@nestjs/common'
import { AppController } from './controllers/app.controller'
import { AppService } from './app.service'
import { LeetcodeModule } from './modules/leetcode/leetcode.module'
import { ConfigModule } from '@nestjs/config'
import { getEnvPath } from './config/envs/env.helper'

const envFilePath: string = getEnvPath(`${__dirname}/config/envs`)

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    LeetcodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
