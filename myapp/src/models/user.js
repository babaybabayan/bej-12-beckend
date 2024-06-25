import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js';

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

sequelize.sync();

export default User;
