import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { UserProfileParams, GetUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserProfileService {

    constructor(
        @InjectRepository(Profile) private profileRepo: Repository<Profile>,
        @InjectRepository(User) private userRepo: Repository<User>
    ) { }

    findUserProfile() {
        return this.profileRepo.find({relations: ['accounts']});
    }

    async createUserProfile(id: number, userProfileDetails: UserProfileParams) {
        const user = await this.userRepo.findOneBy({ id });
        if (!user) {
            throw new HttpException(
                'User not found. Cannot create user profile.'
                , HttpStatus.BAD_REQUEST
            );
        }
        const newUserProfile = this.profileRepo.create(userProfileDetails);
        const saveUserProfile = await this.profileRepo.save(newUserProfile);
        user.profile = saveUserProfile;
        return this.userRepo.save(user);
    }

    async updateUserProfile(id: number, updateUserProfileDetails: GetUserParams) {
        return await this.profileRepo.update({ id }, { ...updateUserProfileDetails });
    }
}
