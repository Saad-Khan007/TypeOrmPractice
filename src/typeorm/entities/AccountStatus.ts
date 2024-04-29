import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "account_status" })
export class AccountStatus {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    name: string;
}