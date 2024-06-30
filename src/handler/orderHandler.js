class OrderHandler {
  constructor(orderService) {
    this.orderService = orderService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    const response = await this.orderService.getAll();
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      order: response.order,
      message: response.message,
    });
  }
  async getById(req, res) {
    const id = req.params.id;
    const response = await this.orderService.getById(id);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      order: response.order,
      message: response.message,
    });
  }
  async create(req, res) {
    const payload = req.body;
    const response = await this.orderService.create(payload);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      order: response.order,
      message: response.message,
    });
  }
  async update(req, res) {
    const payload = req.body;
    const response = await this.orderService.update(payload);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      order: response.order,
      message: response.message,
    });
  }
  async delete(req, res) {
    const payload = req.body;
    const response = await this.orderService.delete(payload.id);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      order: response.order,
      message: response.message,
    });
  }
}

module.exports = OrderHandler;
