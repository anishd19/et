const HOST = process.env.dbhost || 'http://localhost:1234';

export const SERVICE_CONSTANT = {
    LOGIN: HOST + '/api/users/login',
    REGISTER: HOST + '/api/users',
    READ_EXPENSES: HOST + '/api/expenses',
    DELETE_EXPENSE: HOST + '/api/expenses',
    ADD_EXPENSES: HOST + '/api/expenses'
}