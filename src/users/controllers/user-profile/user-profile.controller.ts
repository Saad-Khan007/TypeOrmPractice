import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserProfileDto, GetUserDto } from 'src/users/dtos/dto';
import { UserProfileService } from 'src/users/services/user-profile/user-profile.service';

@Controller('user-profile')
export class UserProfileController {

    constructor(private profileService: UserProfileService) { }

    @Get()
    getProfile() {
        return this.profileService.findUserProfile();
    }

    @Post(':id')
    createProfile(@Param('id', ParseIntPipe) id: number, @Body() UserProfileDto: UserProfileDto) {
        return this.profileService.createUserProfile(id, UserProfileDto);
    }

    @Put(':id')
    updateProfileById(@Param('id', ParseIntPipe) id: number, @Body() UserDto: GetUserDto) {
        return this.profileService.updateUserProfile(id, UserDto);
    }
}
