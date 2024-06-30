class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async getAll() {
    try {
      const order = await this.orderRepository.getAll();
      return {
        statusCode: 200,
        order: order,
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
      const order = await this.orderRepository.getById(id);
      return {
        statusCode: 500,
        order: order,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async create(order) {
    try {
      if (!order.name) {
        return {
          statusCode: 409,
          message: 'order name cannot be empty',
        };
      }
      await this.orderRepository.create(order);
      return {
        statusCode: 201,
        message: 'New order Created',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async update(order) {
    try {
      if (!order.name) {
        return {
          statusCode: 409,
          message: 'order name cannot be empty',
        };
      }
      await this.orderRepository.update(order);
      return {
        statusCode: 201,
        message: 'New order Updated',
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
      await this.orderRepository.delete(id);
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

module.exports = OrderService;
