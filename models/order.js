'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
      order.belongsTo(models.item, { foreignKey: 'itemId', as: 'item' });
      order.belongsTo(models.status, { foreignKey: 'statusId', as: 'status' });
    }
  }
  order.init(
    {
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      statusId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      paranoid: true,
      sequelize,
      deletedAt: 'destroyTime',
      underscored: true,
      modelName: 'order',
    }
  );
  return order;
};
