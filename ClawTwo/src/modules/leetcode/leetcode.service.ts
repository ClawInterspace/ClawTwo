import { Injectable, Logger } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import LeetcodeStatusDto from './dto/leetcode.status.dto'

@Injectable()
export class LeetcodeService {
  private readonly logger = new Logger(LeetcodeService.name)

  getList(): LeetcodeStatusDto[] {
    const codeFolder = 'C:\\Users\\s8711\\workspace\\learn\\leetcode-py'
    const allLeetcodeStatus: LeetcodeStatusDto[] = []
    fs.readdirSync(codeFolder).forEach((file) => {
      const p = path.join(codeFolder, file)
      if (fs.lstatSync(p).isFile() && path.parse(p).ext === '.py') {
        this.logger.debug(path.parse(p).base)
        allLeetcodeStatus.push(
          new LeetcodeStatusDto({ name: path.parse(p).base }),
        )
      }
    })
    return allLeetcodeStatus
  }
}
