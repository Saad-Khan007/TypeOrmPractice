import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CurrencyDto } from 'src/users/dtos/dto';
import { CategoryService } from 'src/users/services/category/category.service';

@Controller('category')
export class CategoryController {
    constructor(private service: CategoryService) { }

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
