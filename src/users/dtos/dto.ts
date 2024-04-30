export class UserDto {
    username: string;
    password: string;
    email: string;
}

export class GetUserDto {
    id: number;
}

export class UserProfileDto {
    firstname: string;
    lastname: string;
    age: number;
    dob: string;
}

export class AccountDto {
    balance: number;
}

export class CurrencyDto {
    name: string;
}

export class SavingGoalDto {
    name: string;
    completionDate: string;
    targetAmount: number;
}

export class BudgetDto {
    month: string;
    amount: number;
}