import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CurrencyDto } from 'src/users/dtos/dto';
import { CurrencyService } from 'src/users/services/currency/currency.service';

@Controller('currency')
export class CurrencyController {

    constructor(private service: CurrencyService) { }

    @Get()
    get() {
        return this.service.get();
    }

    @Post()
    createA(
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
