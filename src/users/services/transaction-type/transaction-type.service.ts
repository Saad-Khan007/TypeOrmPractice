import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrencyParams } from 'src/utils/types';
import { TransactionType } from 'src/typeorm/entities/TransactionType';
@Injectable()
export class TransactionTypeService {
    constructor(
        @InjectRepository(TransactionType) private repo: Repository<TransactionType>
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
