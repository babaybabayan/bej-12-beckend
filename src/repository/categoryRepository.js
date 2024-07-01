const Category = require('../../models').category;

class CategoryRepository {
  constructor() {}
  async getAll() {
    const categoryList = await Category.findAll();
    return categoryList;
  }
  async getById(id) {
    return await Category.findOne({
      where: {
        id: id,
      },
    });
  }
  async create(category) {
    return await Category.create({
      name: category.name,
    });
  }
  async update(category) {
    return Category.update(
      {
        name: category.name,
      },
      { where: { id: category.id } }
    );
  }
  async delete(id) {
    return await Category.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = CategoryRepository;
