import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { Account } from './typeorm/entities/Account';
import { Currency } from './typeorm/entities/Currency';
import { AccountType } from './typeorm/entities/AccountType';
import { TransactionType } from './typeorm/entities/TransactionType';
import { AccountStatus } from './typeorm/entities/AccountStatus';
import { Category } from './typeorm/entities/Category';
import { SavingGoal } from './typeorm/entities/SavingGoal';
import { Tag } from './typeorm/entities/Tag';
import { Budget } from './typeorm/entities/Budget';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hysab_kytab',
    entities: [User, Profile, Account, Currency, AccountType, TransactionType, AccountStatus, Category, SavingGoal, Tag, Budget],
    synchronize: true,
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
