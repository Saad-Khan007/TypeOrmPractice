import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";

@Entity({ name: "saving_goal" })
export class SavingGoal {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @Column()
    targetAmount: number;

    @Column()
    completionDate: Date;

    @ManyToOne(() => Account, (account) => account.savingGoal)
    account: Account;
}