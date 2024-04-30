import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "category" })
export class Category {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    name: string;
}