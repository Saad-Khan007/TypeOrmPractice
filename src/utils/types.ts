export class UserParams {
    username: string;
    password: string;
    email: string;
}

export class GetUserParams {
    id: number;
}

export class UserProfileParams {
    firstname: string;
    lastname: string;
    age: number;
    dob: string;
}

export class AccountParams {
    accountName: string;
    balance: number;
}

export class CurrencyParams {
    name: string;
}