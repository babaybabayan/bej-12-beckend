'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('statuses', [
      {
        name: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'success',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'failed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('statuses', null, {});
  },
};
