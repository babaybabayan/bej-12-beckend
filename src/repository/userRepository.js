const User = require('../../models').user;

class UserRepository {
  constructor() {}
  async getAll() {
    return await User.findAll();
  }

  async getByEmail(email) {
    return await User.findOne({
      where: { email: email },
    });
  }

  async insert(user) {
    return await User.create({
      username: user.username,
      password: user.password,
      email: user.email,
    });
  }
}

module.exports = UserRepository;
