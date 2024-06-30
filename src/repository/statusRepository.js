const { Status } = require('../../models');
class StatusRepository {
  constructor() {}
  async getAll() {
    return await Status.findAll();
  }
  async getById(id) {
    return await Status.findOne({
      where: {
        id: id,
      },
    });
  }
  async create(status) {
    return await Status.create({
      name: status.name,
    });
  }
  async update(status) {
    return Status.update(
      {
        name: status.name,
      },
      { where: { id: status.id } }
    );
  }
  async delete(id) {
    return await Status.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = StatusRepository;
