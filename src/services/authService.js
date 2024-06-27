class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(user) {
    try {
      if (!user.username || !user.email) {
        return {
          statusCode: 409,
          message: 'user or email cannot be empty',
        };
      }
      await this.userRepository.insert(user);
      return {
        statusCode: 201,
        message: 'New User Created',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async login(parameter) {
    try {
      const user = await this.userRepository.getByEmail(parameter.email);
      if (!user) {
        return {
          statusCode: 409,
          message: 'user not found',
        };
      }
      if (user.password !== parameter.password) {
        return {
          statusCode: 409,
          message: 'incorrect password',
        };
      }
      return {
        statusCode: 200,
        message: 'Login Success',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }
}

export default AuthService;
