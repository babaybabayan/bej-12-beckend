import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'categories',
  }
);

sequelize.sync();

export default Category;
