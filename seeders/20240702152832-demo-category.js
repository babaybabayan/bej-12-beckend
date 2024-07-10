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
    await queryInterface.bulkInsert('categories', [
      {
        name: 'SUV',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Convertible',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sedan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Passenger Van',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Minivan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Coupe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cargo Van',
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
    await queryInterface.bulkDelete('categories', null, {});
  },
};
