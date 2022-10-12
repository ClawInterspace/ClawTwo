import { Controller, Get } from '@nestjs/common';
import { LeetcodeService } from '../../modules/leetcode/leetcode.service';

@Controller('leetcode')
export class LeetcodeController {
  constructor(private readonly leetcodeService: LeetcodeService) {}

  @Get('all')
  getList(): string[] {
    return this.leetcodeService.getList();
  }
}
