'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.category, { foreignKey: 'categoryId', as: 'category' });
      item.hasMany(models.order, { foreignKey: 'itemId', as: 'item' });
    }
  }
  item.init(
    {
      categoryId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quantity: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'item',
    }
  );
  return item;
};
