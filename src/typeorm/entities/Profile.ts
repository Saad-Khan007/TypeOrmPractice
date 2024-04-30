import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";
import { User } from "./User";

@Entity({ name: 'profile' })
export class Profile {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    age: number;

    @Column()
    dob: string;

    @OneToMany(() => Account, (account) => account.profile)
    accounts: Account[];

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}