class AuthHandler {
  constructor(authService) {
    this.authService = authService;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register(req, res) {
    const payload = req.body;
    const response = await this.authService.register(payload);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      user: response.user,
      message: response.message,
    });
  }

  async login(req, res) {
    const payload = req.body;
    const response = await this.authService.login(payload);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      user: response.user,
      message: response.message,
    });
  }
}

export default AuthHandler;
