import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('LeetcodeStatus')
export class LeetcodeStatusEntity {
  @PrimaryColumn()
  public questionNum: string

  @Column()
  public questionName: string

  @Column({ type: 'text', array: true })
  public tags: string[]

  @Column({ default: '' })
  public passProgLangs: string

  @Column({ default: '' })
  public questionUrl: string
}
