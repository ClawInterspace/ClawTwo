import { Controller, Get } from '@nestjs/common'
import { LeetcodeService } from '../../modules/leetcode/leetcode.service'
import LeetcodeStatus from '../../modules/leetcode/dto/LeetcodeStatus'

@Controller('leetcode')
export class LeetcodeController {
  constructor(private readonly leetcodeService: LeetcodeService) {}

  @Get('all')
  getList(): LeetcodeStatus[] {
    return this.leetcodeService.getList()
  }
}
