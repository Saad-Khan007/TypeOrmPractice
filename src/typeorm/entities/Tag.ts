import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tag" })
export class Tag {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    name: string;
}