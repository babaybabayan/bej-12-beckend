class CategoryHandler {
  constructor(categoryService) {
    this.categoryService = categoryService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    const response = await this.categoryService.getAll();
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      category: response.category,
      message: response.message,
    });
  }
  async getById(req, res) {
    const id = req.params.id;
    const response = await this.categoryService.getById(id);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      category: response.category,
      message: response.message,
    });
  }
  async create(req, res) {
    const payload = req.body;
    const response = await this.categoryService.create(payload);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      category: response.category,
      message: response.message,
    });
  }
  async update(req, res) {
    const payload = req.body;
    const response = await this.categoryService.update(payload);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      category: response.category,
      message: response.message,
    });
  }
  async delete(req, res) {
    const payload = req.body;
    const response = await this.categoryService.delete(payload.id);
    return res.status(response.statusCode).json({
      statusCode: response.statusCode,
      category: response.category,
      message: response.message,
    });
  }
}

module.exports = CategoryHandler;
