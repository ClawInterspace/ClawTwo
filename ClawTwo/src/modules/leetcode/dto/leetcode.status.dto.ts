/**
 * LeetcodeFile
 * @export
 * @class LeetcodeStatusDto
 */

export default class LeetcodeStatusDto {
  public questionName: string = ''
  public tags: string[] = []
  public link: string = ''
  public passProgLangs: string[] = []

  constructor(fields?: { name?: string }) {
    if (fields) {
      Object.assign(this, fields)
    }
  }
}
