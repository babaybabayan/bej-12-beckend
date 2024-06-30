class StatusService {
  constructor(statusRepository) {
    this.statusRepository = statusRepository;
  }

  async getAll() {
    try {
      const status = await this.statusRepository.getAll();
      return {
        statusCode: 200,
        status: status,
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
      const status = await this.statusRepository.getById(id);
      return {
        statusCode: 500,
        status: status,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async create(status) {
    try {
      if (!status.name) {
        return {
          statusCode: 409,
          message: 'status name cannot be empty',
        };
      }
      await this.statusRepository.create(status);
      return {
        statusCode: 201,
        message: 'New status Created',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async update(status) {
    try {
      if (!status.name) {
        return {
          statusCode: 409,
          message: 'status name cannot be empty',
        };
      }
      await this.statusRepository.update(status);
      return {
        statusCode: 201,
        message: 'New status Updated',
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
      await this.statusRepository.delete(id);
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

module.exports = StatusService;
