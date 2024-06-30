class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getAll() {
    try {
      const category = await this.categoryRepository.getAll();
      return {
        statusCode: 200,
        category: category,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async getById(id) {
    try {
      if (!id) {
        return {
          statusCode: 409,
          message: 'please insert id',
        };
      }
      const category = await this.categoryRepository.getById(id);
      return {
        statusCode: 500,
        category: category,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async create(category) {
    try {
      if (!category.name) {
        return {
          statusCode: 409,
          message: 'category name cannot be empty',
        };
      }
      await this.categoryRepository.create(category);
      return {
        statusCode: 201,
        message: 'New category Created',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async update(category) {
    try {
      if (!category.name) {
        return {
          statusCode: 409,
          message: 'category name cannot be empty',
        };
      }
      await this.categoryRepository.update(category);
      return {
        statusCode: 201,
        message: 'New category Updated',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async delete(id) {
    try {
      if (!id) {
        return {
          statusCode: 409,
          message: 'please insert id',
        };
      }
      await this.categoryRepository.delete(id);
      return {
        statusCode: 200,
        message: 'delete success',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }
}

module.exports = CategoryService;
