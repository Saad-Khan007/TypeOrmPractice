import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "transaction_type" })
export class TransactionType {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    name: string;
}