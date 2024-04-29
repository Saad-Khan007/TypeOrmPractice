import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";

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
}