import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';

class Item extends Model {
  static associate(models) {
    Item.belongsTo(models.Item, {
      foreignKey: 'category_id', // Foreign key in the Category table
      as: 'category',
    });
  }
}

Item.init(
  {
    item_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'items',
  }
);

sequelize.sync();

export default Item;
