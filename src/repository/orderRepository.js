const Order = require('../../models').order;
const User = require('../../models').user;
const Item = require('../../models').item;
const Status = require('../../models').status;
class OrderRepository {
  constructor() {}
  async getAll() {
    return await Order.findAll({
      include: [
        {
          model: User,
          required: true,
          as: 'user',
        },
        {
          model: Item,
          required: true,
          as: 'item',
        },
        {
          model: Status,
          required: true,
          as: 'status',
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
      statusId: order.statusId,
      quantity: order.quantity,
    });
  }
  async update(order) {
    return Order.update(
      {
        userId: order.userId,
        itemId: order.itemId,
        statusId: order.statusId,
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
