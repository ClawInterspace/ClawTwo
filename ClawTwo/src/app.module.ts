import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { LeetcodeModule } from './modules/leetcode/leetcode.module';

@Module({
  imports: [LeetcodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
