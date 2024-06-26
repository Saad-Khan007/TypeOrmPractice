import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "currency" })
export class Currency {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    name: string;
}