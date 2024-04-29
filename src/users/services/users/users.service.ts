import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UserParams, GetUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    findUsers() {
        return this.userRepo.find({ relations: ['profile'] });
    }

    createUser(userDetails: UserParams) {
        const newUser = this.userRepo.create({
            ...userDetails,
            createdAt: new Date()
        });
        return this.userRepo.save(newUser);
    }

    async updateUser(id: number, userDetails: GetUserParams) {
        return await this.userRepo.update({ id }, { ...userDetails });
    }

    async deleteUser(id: number) {
        return await this.userRepo.delete({ id });
    }
}
