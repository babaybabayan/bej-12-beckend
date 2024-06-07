const UserService = require('./service/userService');
const UserRepository = require('./repository/userRepository');

users = [
    {
        name: "Jono",
        email: "jono@binar.com",
        password: "jono1123"
    }
]

const repository = new UserRepository(users);
const service = new UserService(repository);

const userToRegister = {
    name: "abby",
    email: "abby@binar.com",
    password: "abby123"
}

console.log("[userService] register(): ", JSON.stringify(service.register(userToRegister)))

const userToLogin = {
    email: "abby@binar.com",
    password: "abby123"
}

console.log("[userService] login(): ", JSON.stringify(service.login(userToLogin)))