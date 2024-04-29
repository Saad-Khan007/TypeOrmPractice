import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from 'src/typeorm/entities/Currency';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CurrencyParams } from 'src/utils/types';

@Injectable()
export class CurrencyService {
    constructor(
        @InjectRepository(Currency) private currencyRepo: Repository<Currency>
    ) { }

    get() {
        return this.currencyRepo.find();
    }

    async create(accountDetails: CurrencyParams) {
        const newAccount = this.currencyRepo.create(accountDetails);
        return this.currencyRepo.save(newAccount);
    }

    async update(id: number, accountDetails: CurrencyParams) {
        return await this.currencyRepo.update({ id }, accountDetails);
    }
}
