const { Item, Category } = require('../../models');

class ItemRepository {
  constructor() {}
  async getAll() {
    return await Item.findAll({
      include: [
        {
          model: Category,
          required: true,
          as: 'category',
          // attributes: ['name']
        },
      ],
    });
  }
  async getById(id) {
    return await Item.findOne({
      where: {
        id: id,
      },
    });
  }
  async create(item) {
    return await Item.create({
      category_id: item.categoryId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    });
  }
  async update(item) {
    return Item.update(
      {
        category_id: item.categoryId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      },
      { where: { id: item.id } }
    );
  }
  async delete(id) {
    return await Item.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = ItemRepository;
