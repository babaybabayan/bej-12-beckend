class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async getAll() {
    try {
      const orders = await this.orderRepository.getAll();
      const formattedOrder = orders.map((order) => ({
        id: order.id,
        email: order.user.email,
        status: order.status.name,
        quantity: order.quantity,
        item: {
          name: order.item.name,
          price: order.item.price,
        },
      }));
      return {
        statusCode: 200,
        order: formattedOrder,
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
      const orders = await this.orderRepository.getById(id);
      const formattedOrder = orders.map((order) => ({
        id: order.id,
        email: order.user.email,
        status: order.status.name,
        quantity: order.quantity,
        item: {
          name: order.item.name,
          price: order.item.price,
        },
      }));
      return {
        statusCode: 500,
        order: formattedOrder,
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
