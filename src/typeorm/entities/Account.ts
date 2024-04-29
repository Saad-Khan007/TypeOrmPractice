import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";
import { Currency } from "./Currency";

@Entity({ name: "account" })
export class Account {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    accountName: string;

    @Column()
    balance: number;    

    @Column()
    createdAt: Date;

    @ManyToOne(() => Profile, (profile)=> profile.accounts)
    profile: Profile;

    @OneToOne(() => Currency)
    @JoinColumn()
    currency: Currency;
}