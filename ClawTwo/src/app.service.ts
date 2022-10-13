import { Injectable } from '@nestjs/common'
import { LeetcodeService } from './modules/leetcode/leetcode.service'

@Injectable()
export class AppService {
  getHello(): string {
    const s = new LeetcodeService()
    s.getList()
    return 'Hello ClawTwo!'
  }
}
