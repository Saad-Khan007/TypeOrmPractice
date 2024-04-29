import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrencyParams } from 'src/utils/types';
import { AccountStatus } from 'src/typeorm/entities/AccountStatus';

@Injectable()
export class AccountStatusService {
    constructor(
        @InjectRepository(AccountStatus) private repo: Repository<AccountStatus>
    ) { }

    get() {
        return this.repo.find();
    }

    async create(details: CurrencyParams) {
        const newAccount = this.repo.create(details);
        return this.repo.save(newAccount);
    }

    async update(id: number, details: CurrencyParams) {
        return await this.repo.update({ id }, details);
    }
}
