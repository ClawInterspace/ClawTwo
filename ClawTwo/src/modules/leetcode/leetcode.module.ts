import { Module } from '@nestjs/common';
import { LeetcodeService } from './leetcode.service';
import { LeetcodeController } from '../../controllers/leetcode/leetcode.controller';

@Module({
  imports: [],
  controllers: [LeetcodeController],
  providers: [LeetcodeService],
})
export class LeetcodeModule {}
