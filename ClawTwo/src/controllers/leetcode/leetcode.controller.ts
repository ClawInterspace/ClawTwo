import { Controller, Get } from '@nestjs/common'
import { LeetcodeService } from '../../modules/leetcode/leetcode.service'
import LeetcodeStatusDto from '../../modules/leetcode/dto/leetcode.status.dto'

@Controller('leetcode')
export class LeetcodeController {
  constructor(private readonly leetcodeService: LeetcodeService) {}

  @Get('all')
  getList(): LeetcodeStatusDto[] {
    return this.leetcodeService.getList()
  }
}
