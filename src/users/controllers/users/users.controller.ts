import { Body, Controller, Get, Post, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { get } from 'http';
import { CreateUserDto } from 'src/users/dtos/CreateUsers.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('user')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    GetUsers() {
        return this.usersService.findUsers();
    }

    @Post()
    CreateUser(@Body() CreateUserDto: CreateUserDto) {
        return this.usersService.createUser(CreateUserDto);
    }

    @Put(':id')
    ModifyUserById(@Param('id', ParseIntPipe) id: number, @Body() UpdateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(id, UpdateUserDto);
    }

    @Delete(':id')
    DeleteUserById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }
}
