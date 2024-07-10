'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('orders', 'statusId');
    await queryInterface.addColumn('orders', 'transactionId', { type: DataTypes.STRING });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('orders', 'userId', { type: DataTypes.STRING });
    await queryInterface.addColumn('orders', 'statusId', { type: DataTypes.STRING });
    await queryInterface.removeColumn('orders', 'transactionId');
  },
};
