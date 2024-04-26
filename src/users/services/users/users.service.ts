import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { User } from 'src/typeorm/entities/User';
import { createUserParams, updateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }
    findUsers() {
        return this.userRepo.find();
    }

    createUser(userDetails: createUserParams) {
        const newUser = this.userRepo.create({
            ...userDetails,
            createdAt: new Date()
        });
        return this.userRepo.save(newUser);
    }

    async updateUser(id: number, updateUserDetails: updateUserParams) {
        return await this.userRepo.update({ id }, { ...updateUserDetails });
    }

    async deleteUser(id: number) {
        return await this.userRepo.delete({ id });
    }
}
