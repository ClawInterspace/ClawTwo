import { Module } from '@nestjs/common'
import { AppController } from './controllers/app.controller'
import { AppService } from './app.service'
import { LeetcodeModule } from './modules/leetcode/leetcode.module'
import { ConfigModule } from '@nestjs/config'
import { getEnvPath } from './config/envs/env.helper'
import { TypeOrmConfigService } from './database/database.service'
import { TypeOrmModule } from '@nestjs/typeorm'

const envFilePath: string = getEnvPath(`${__dirname}/config/envs`)

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    LeetcodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
