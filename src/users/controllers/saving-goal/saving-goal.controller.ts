import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SavingGoalService } from 'src/users/services/saving-goal/saving-goal.service';
import { UserProfileDto, GetUserDto, SavingGoalDto } from 'src/users/dtos/dto';

@Controller('saving-goal')
export class SavingGoalController {
    
    constructor(private service: SavingGoalService) { }

    @Get()
    get() {
        return this.service.get();
    }

    @Post(':id')
    create(@Param('id', ParseIntPipe) id: number, @Body() details: SavingGoalDto) {
        return this.service.create(id, details);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() details: GetUserDto) {
        return this.service.update(id, details);
    }
}
