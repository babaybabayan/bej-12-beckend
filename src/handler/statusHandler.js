class StatusHandler {
  constructor(statusService) {
    this.statusService = statusService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    const response = await this.statusService.getAll();
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      item: response.items,
      message: response.message,
    });
  }
  async getById(req, res) {
    const id = req.params.id;
    const response = await this.statusService.getById(id);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      item: response.item,
      message: response.message,
    });
  }
  async create(req, res) {
    const payload = req.body;
    const response = await this.statusService.create(payload);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      item: response.item,
      message: response.message,
    });
  }
  async update(req, res) {
    const payload = req.body;
    const response = await this.statusService.update(payload);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      item: response.item,
      message: response.message,
    });
  }
  async delete(req, res) {
    const payload = req.body;
    const response = await this.statusService.delete(payload.id);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      item: response.item,
      message: response.message,
    });
  }
}

module.exports = StatusHandler;
