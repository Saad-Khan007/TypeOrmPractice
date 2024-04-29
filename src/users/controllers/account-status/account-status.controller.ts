import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CurrencyDto } from 'src/users/dtos/dto';
import { AccountStatusService } from 'src/users/services/account-status/account-status.service';

@Controller('account-status')
export class AccountStatusController {
    constructor(private service: AccountStatusService) { }

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
