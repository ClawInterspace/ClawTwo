import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import LeetcodeStatus from './dto/LeetcodeStatus';

@Injectable()
export class LeetcodeService {
  getList(): LeetcodeStatus[] {
    const codeFolder = `C:\\Users\\s8711\\workspace\\learn\\leetcode-py`;
    let allLeetcodeStatus: LeetcodeStatus[] = [];
    fs.readdirSync(codeFolder).forEach((file) => {
      const p = path.join(codeFolder, file);
      if (fs.lstatSync(p).isFile()) {
        console.log(path.parse(p).base);
        allLeetcodeStatus.push(
          new LeetcodeStatus({ name: path.parse(p).base }),
        );
      }
    });
    // console.log(allLeetcodeFiles);
    return allLeetcodeStatus;
  }
}
