const Order = require('../../models').order;
const Item = require('../../models').item;
class OrderRepository {
  constructor() {}
  async getAll() {
    return await Order.findAll({
      include: [
        {
          model: Item,
          required: true,
          as: 'item',
        },
      ],
    });
  }
  async getById(id) {
    return await Order.findOne({
      where: {
        id: id,
      },
    });
  }
  async create(order) {
    return await Order.create({
      userId: order.userId,
      itemId: order.itemId,
      transactionId: order.transactionId,
      quantity: order.quantity,
    });
  }
  async update(order) {
    return Order.update(
      {
        itemId: order.itemId,
        transactionId: order.transactionId,
        quantity: order.quantity,
      },
      { where: { id: order.id } }
    );
  }
  async delete(id) {
    return await Order.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = OrderRepository;
