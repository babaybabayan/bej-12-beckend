class ItemService {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async getAll() {
    try {
      const items = await this.itemRepository.getAll();
      return {
        statusCode: 200,
        items: items,
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
      const item = await this.itemRepository.getById(id);
      return {
        statusCode: 500,
        item: item,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async create(item) {
    try {
      if (!item.name) {
        return {
          statusCode: 409,
          message: 'Item name cannot be empty',
        };
      }
      await this.itemRepository.create(item);
      return {
        statusCode: 201,
        message: 'New Item Created',
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error.message,
      };
    }
  }

  async update(item) {
    try {
      if (!item.name) {
        return {
          statusCode: 409,
          message: 'Item name cannot be empty',
        };
      }
      await this.itemRepository.update(item);
      return {
        statusCode: 201,
        message: 'New Item Updated',
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
      await this.itemRepository.delete(id);
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

module.exports = ItemService;
