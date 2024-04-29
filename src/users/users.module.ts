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
import { Currency } from 'src/typeorm/entities/Currency';
import { CurrencyService } from './services/currency/currency.service';
import { CurrencyController } from './controllers/currency/currency.controller';
import { AccountType } from 'src/typeorm/entities/AccountType';
import { AccountTypeController } from './controllers/account-type/account-type.controller';
import { AccountTypeService } from './services/account-type/account-type.service';
import { TransactionType } from 'src/typeorm/entities/TransactionType';
import { TransactionTypeService } from './services/transaction-type/transaction-type.service';
import { TransactionTypeController } from './controllers/transaction-type/transaction-type.controller';
import { AccountStatus } from 'src/typeorm/entities/AccountStatus';
import { AccountStatusService } from './services/account-status/account-status.service';
import { AccountStatusController } from './controllers/account-status/account-status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile, Account, Currency, AccountType, TransactionType, AccountStatus])],
  controllers: [UsersController, UserProfileController, AccountController, CurrencyController, AccountTypeController, TransactionTypeController, AccountStatusController],
  providers: [UsersService, UserProfileService, AccountService, CurrencyService, AccountTypeService, TransactionTypeService, AccountStatusService]
})
export class UsersModule { }
