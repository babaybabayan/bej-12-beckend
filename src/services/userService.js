class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async getAll() {
    const users = await this.userRepository.getAll();
    console.log(users);
    return users;
  }

  async getByEmail(email) {
    try {
      const user = await this.userRepository.getByEmail(email);
      if (user === undefined) {
        return {
          statusCode: 409,
          message: 'user not found',
        };
      }

      if (user.password !== password) {
        return {
          statusCode: 409,
          message: 'incorrect password',
        };
      }

      return {
        statusCode: 200,
        user: {
          username: user.username,
          email: user.email,
        },
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  add() {
    this.userRepository.add();
  }

  async create(user) {
    try {
      if (!user.username || !user.email) {
        return {
          statusCode: 409,
          message: 'user or email cannot be empty',
        };
      }
      const newUser = await this.userRepository.insert(user);
      return {
        statusCode: 201,
        user: newUser,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }
}

export default UserService;
