import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { Account } from "./Account";

@Entity('budget')
export class Budget {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column()
    amount: number;

    @Column()
    month: string;

    @OneToOne(() => Category, {
        cascade: true,
        createForeignKeyConstraints: false
    })
    @JoinColumn()
    category: Category;

    @OneToOne(() => Account, {
        cascade: true,
        createForeignKeyConstraints: false
    })
    @JoinColumn()
    account: Account;
}