import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('agendamentos')
export class Agendamentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  especie: string;

  @Column()
  tutor: string;
}
