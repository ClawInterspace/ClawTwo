import { Module } from '@nestjs/common'
import { LeetcodeService } from './leetcode.service'
import { LeetcodeController } from '../../controllers/leetcode/leetcode.controller'
import { LeetcodeStatusEntity } from './entities/leetcode.status.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([LeetcodeStatusEntity])],
  controllers: [LeetcodeController],
  providers: [LeetcodeService],
})
export class LeetcodeModule {}
