import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';

class Status extends Model {}

Status.init(
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
    tableName: 'status',
  }
);

sequelize.sync();

export default status;
