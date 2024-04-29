import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "account_type" })
export class AccountType {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    name: string;
}