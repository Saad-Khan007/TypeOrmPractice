import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UserProfileController } from './controllers/user-profile/user-profile.controller';
import { UserProfileService } from './services/user-profile/user-profile.service';
import { Profile } from 'src/typeorm/entities/Profile';
import { Account } from 'src/typeorm/entities/Account';
import { AccountController } from './controllers/account/account.controller';
import { AccountService } from './services/account/account.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Account])],
  controllers: [UsersController, UserProfileController, AccountController],
  providers: [UsersService, UserProfileService, AccountService]
})
export class UsersModule { }
