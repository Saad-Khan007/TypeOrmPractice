import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";
import { Currency } from "./Currency";
import { SavingGoal } from "./SavingGoal";
import { AccountType } from "./AccountType";
import { AccountStatus } from "./AccountStatus";

@Entity({ name: "account" })
export class Account {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    balance: number;

    @Column()
    createdAt: Date;

    @ManyToOne(() => Profile, (profile) => profile.accounts)
    profile: Profile;

    @OneToOne(() => Currency, {
        cascade: true,
        createForeignKeyConstraints: false
    })
    @JoinColumn()
    currency: Currency;

    @OneToOne(() => AccountType, {
        cascade: true,
        createForeignKeyConstraints: false
    })
    @JoinColumn()
    accountType: AccountType;

    @OneToOne(() => AccountStatus, {
        cascade: true,
        createForeignKeyConstraints: false
    })
    @JoinColumn()
    accountStatus: AccountStatus;

    @OneToMany(() => SavingGoal, (savingGoal) => savingGoal.account)
    savingGoal: SavingGoal[];
}