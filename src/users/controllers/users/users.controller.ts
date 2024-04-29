import { Body, Controller, Get, Post, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { UserDto, GetUserDto } from 'src/users/dtos/dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('user')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    GetUsers() {
        return this.usersService.findUsers();
    }

    @Post()
    CreateUser(@Body() UserDto: UserDto) {
        return this.usersService.createUser(UserDto);
    }

    @Put(':id')
    ModifyUserById(@Param('id', ParseIntPipe) id: number, @Body() UserDto: GetUserDto) {
        return this.usersService.updateUser(id, UserDto);
    }

    @Delete(':id')
    DeleteUserById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }
}
