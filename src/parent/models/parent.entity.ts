import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ParentEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
