import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AccountDto } from 'src/users/dtos/dto';
import { AccountService } from 'src/users/services/account/account.service';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) { }

    @Get()
    getAccount() {
        return this.accountService.findAccount();
    }

    @Post(':id')
    createAccount(
        @Param('id', ParseIntPipe) id: number,
        @Body() accountDto: AccountDto
    ) {
        return this.accountService.createAccount(id, accountDto);
    }

    @Put(':id')
    updateAccount(
        @Param('id', ParseIntPipe) id: number,
        @Body() accountDto: AccountDto
    ) { }
}
