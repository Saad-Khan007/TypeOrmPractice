import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CurrencyDto } from 'src/users/dtos/dto';
import { AccountTypeService } from 'src/users/services/account-type/account-type.service';

@Controller('account-type')
export class AccountTypeController {
    constructor(private service: AccountTypeService) { }

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
