import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrencyParams } from 'src/utils/types';
import { AccountType } from 'src/typeorm/entities/AccountType';

@Injectable()
export class AccountTypeService {
    constructor(
        @InjectRepository(AccountType) private accountTypeRepo: Repository<AccountType>
    ) { }

    get() {
        return this.accountTypeRepo.find();
    }

    async create(accountDetails: CurrencyParams) {
        const newAccount = this.accountTypeRepo.create(accountDetails);
        return this.accountTypeRepo.save(newAccount);
    }

    async update(id: number, accountDetails: CurrencyParams) {
        return await this.accountTypeRepo.update({ id }, accountDetails);
    }
}
