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
      paranoid: true,
      sequelize,
      deletedAt: 'destroyTime',
      underscored: true,
      modelName: 'item',
    }
  );
  return item;
};
