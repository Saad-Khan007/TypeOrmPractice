import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BudgetDto, GetUserDto } from 'src/users/dtos/dto';
import { BudgetService } from 'src/users/services/budget/budget.service';

@Controller('budget')
export class BudgetController {
    constructor(public service: BudgetService) { }

    @Get()
    get() {
        return this.service.get();
    }

    @Post(':accountId/:categoryId')
    create(
        @Param('accountId', ParseIntPipe) accountId: number,
        @Param('categoryId', ParseIntPipe) categoryId: number,
        @Body() details: BudgetDto
    ) {
        return this.service.create(accountId, categoryId, details);
    }
    
    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() details: GetUserDto
    ) {
        return this.service.update(id,details);
    }
}
