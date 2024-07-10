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
    await queryInterface.bulkInsert('items', [
      {
        categoryId: 1,
        name: 'Jeep Aventador',
        price: '83939',
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        name: 'Lamborghini Impala',
        price: '47042',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3,
        name: 'Nissan Camaro',
        price: '18288',
        quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4,
        name: 'Jeep 911',
        price: '59976',
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5,
        name: 'Chevrolet PT Cruiser',
        price: '82189',
        quantity: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6,
        name: 'Hyundai Durango',
        price: '97046',
        quantity: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7,
        name: 'Kia Focus',
        price: '91103',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8,
        name: 'Hyundai Model X',
        price: '91344',
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 9,
        name: 'Cadillac LeBaron',
        price: '83622',
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 10,
        name: 'Bugatti Ranchero',
        price: '95552',
        quantity: 1,
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
    await queryInterface.bulkDelete('items', null, {});
  },
};
