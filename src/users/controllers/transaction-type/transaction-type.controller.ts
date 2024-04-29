import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CurrencyDto } from 'src/users/dtos/dto';
import { TransactionTypeService } from 'src/users/services/transaction-type/transaction-type.service';

@Controller('transaction-type')
export class TransactionTypeController {
    constructor(private service: TransactionTypeService) { }

    @Get()
    get() {
        return this.service.get();
    }

    @Post()
    create(
        @Body() details: CurrencyDto
    ) {
        return this.service.create(details);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() details: CurrencyDto
    ) {
        return this.service.update(id, details);
    }
}
