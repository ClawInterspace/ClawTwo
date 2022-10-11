import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LeetcodeService {
  getList(): string[] {
    const codeFolder = `C:\\Users\\s8711\\workspace\\learn\\leetcode-py`;
    let allLeetcodeFiles: string[] = [];
    fs.readdirSync(codeFolder).forEach((file) => {
      const p = path.join(codeFolder, file);
      if (fs.lstatSync(p).isFile()) {
        // console.log(p);
        allLeetcodeFiles.push(p);
      }
    });
    console.log(allLeetcodeFiles);
    return allLeetcodeFiles;
  }
}
