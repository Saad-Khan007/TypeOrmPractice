import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/Account';
import { SavingGoal } from 'src/typeorm/entities/SavingGoal';
import { GetUserParams, SavingGoalParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class SavingGoalService {
    constructor(
        @InjectRepository(SavingGoal) private savingGoalRepo: Repository<SavingGoal>,
        @InjectRepository(Account) private accountRepo: Repository<Account>
    ) { }

    get() {
        return this.savingGoalRepo.find({ relations: ['account'] });
    }

    async create(id: number, details: SavingGoalParams) {
        const account = await this.accountRepo.findOneBy({ id });
        if (!account) {
            throw new HttpException(
                'Account not found. Cannot create saving goal.'
                , HttpStatus.BAD_REQUEST
            );
        }
        const data = {
            name: details.name,
            targetAmount: details.targetAmount,
            completionDate: new Date(details.completionDate)
        }
        const newSavingGoal = this.savingGoalRepo.create({ ...data, account });
        return this.savingGoalRepo.save(newSavingGoal);
    }

    async update(id: number, details: GetUserParams) {
        return await this.savingGoalRepo.update({ id }, details);
    }
}
