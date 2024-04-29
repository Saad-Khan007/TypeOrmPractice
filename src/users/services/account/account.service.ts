import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/Account';
import { Profile } from 'src/typeorm/entities/Profile';
import { AccountParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(Profile) private profileRepo: Repository<Profile>,
        @InjectRepository(Account) private accountRepo: Repository<Account>
    ) { }

    findAccount() {
        return this.accountRepo.find({relations: ['profile']});
    }

    async createAccount(id: number, accountDetails: AccountParams) {
        const profile = await this.profileRepo.findOneBy({ id });
        if (!profile) {
            throw new HttpException(
                'Profile not found. Cannot create account.'
                , HttpStatus.BAD_REQUEST
            );
        }
        const newAccount = this.accountRepo.create({ ...accountDetails, profile, createdAt: new Date() });
        return this.accountRepo.save(newAccount);
    }

    async updateAccount(id: number, accountDetails: AccountParams) {
        return await this.accountRepo.update({ id }, { ...accountDetails });
    }
}
