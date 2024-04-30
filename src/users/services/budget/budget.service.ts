import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/Account';
import { Budget } from 'src/typeorm/entities/Budget';
import { Category } from 'src/typeorm/entities/Category';
import { BudgetParams, GetUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetService {
    constructor(
        @InjectRepository(Budget) private budgetRepo: Repository<Budget>,
        @InjectRepository(Account) private accountRepo: Repository<Account>,
        @InjectRepository(Category) private categoryRepo: Repository<Category>,
    ) { }

    get() {
        return this.budgetRepo.find();
    }

    async create(accountId: number, categoryId: number, details: BudgetParams) {
        const account = await this.accountRepo.findOneBy({ id: accountId })
        const category = await this.categoryRepo.findOneBy({ id: categoryId })
        if (!account) {
            throw new HttpException(
                'Account not found. Cannot create budget.'
                , HttpStatus.BAD_REQUEST
            );
        }
        if (!category) {
            throw new HttpException(
                'Category not found. Cannot create budget.'
                , HttpStatus.BAD_REQUEST
            );
        }
        const newBudget = this.budgetRepo.create({ ...details, category, account });
        return this.budgetRepo.save(newBudget);
    }

    update(id: number, details: GetUserParams) {
        return this.budgetRepo.update(id, details);
    }
}
