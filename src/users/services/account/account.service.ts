import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/Account';
import { AccountStatus } from 'src/typeorm/entities/AccountStatus';
import { AccountType } from 'src/typeorm/entities/AccountType';
import { Currency } from 'src/typeorm/entities/Currency';
import { Profile } from 'src/typeorm/entities/Profile';
import { AccountParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(Profile) private profileRepo: Repository<Profile>,
        @InjectRepository(Currency) private currencyRepo: Repository<Currency>,
        @InjectRepository(AccountType) private accountTypeRepo: Repository<AccountType>,
        @InjectRepository(AccountStatus) private accountStatusRepo: Repository<AccountStatus>,
        @InjectRepository(Account) private accountRepo: Repository<Account>
    ) { }

    findAccount() {
        return this.accountRepo.find({ relations: ['profile', 'currency', 'accountType', 'accountStatus', 'savingGoal'] });
    }

    async createAccount(id: number, currencyId: number, typeId: number, accountDetails: AccountParams) {
        const profile = await this.profileRepo.findOneBy({ id });
        const currency = await this.currencyRepo.findOneBy({ id: currencyId });
        const accountType = await this.accountTypeRepo.findOneBy({ id: typeId });
        const accountStatus = await this.accountStatusRepo.findOneBy({ id: 1 });
        if (!profile) {
            throw new HttpException(
                'Profile not found. Cannot create account.'
                , HttpStatus.BAD_REQUEST
            );
        }
        if (!currency) {
            throw new HttpException(
                'Currency not found. Cannot create account.'
                , HttpStatus.BAD_REQUEST
            );
        }
        if (!accountType) {
            throw new HttpException(
                'Account Type not found. Cannot create account.'
                , HttpStatus.BAD_REQUEST
            );
        }
        if (!accountStatus) {
            throw new HttpException(
                'Account Status not found. Cannot create account.'
                , HttpStatus.BAD_REQUEST
            );
        }
        const newAccount = this.accountRepo.create({ ...accountDetails, profile, createdAt: new Date(), currency, accountType, accountStatus });
        return this.accountRepo.save(newAccount);
    }

    async updateAccount(id: number, accountDetails: AccountParams) {
        return await this.accountRepo.update({ id }, { ...accountDetails });
    }
}
