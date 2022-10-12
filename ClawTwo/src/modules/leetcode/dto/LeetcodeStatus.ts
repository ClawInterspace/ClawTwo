/**
 * LeetcodeFile
 * @export
 * @class LeetcodeStatus
 */

export default class LeetcodeStatus {
  public name: string = '';
  public tags: string[] = [];
  public link: string = '';
  public passProgrammingLanguage: string[] = [];

  constructor(fields?: { name?: string }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
