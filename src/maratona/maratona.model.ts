import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'maratona'})
export class Maratona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    aula: string;
}