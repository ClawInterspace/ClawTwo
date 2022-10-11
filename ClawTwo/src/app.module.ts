import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { LeetcodeService } from './modules/leetcode/leetcode/leetcode.service';
import { LeetcodeController } from './modules/leetcode/leetcode/leetcode.controller';

@Module({
  imports: [],
  controllers: [AppController, LeetcodeController],
  providers: [AppService, LeetcodeService],
})
export class AppModule {}
