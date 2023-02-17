import { Users } from './users';

describe('constructor of users', () => {
    const users = new Users ('Usuário');
    expect(users.name).toBe('Usuário');
})