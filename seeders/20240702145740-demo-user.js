'use strict';

const { DATE } = require('sequelize');

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
    await queryInterface.bulkInsert('users', [
      {
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: 'P@ssw0rd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'akbar',
        email: 'akbar@example.com',
        password: 'SecurePass123!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'alexsmith',
        email: 'alexsmith@example.com',
        password: 'Passw0rd!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'sarajones',
        email: 'sarajones@example.com',
        password: 'Sara1234',
        createdAt: '2024-06-29T22:45:10Z',
        updatedAt: '2024-06-30T16:25:00Z',
      },
      {
        username: 'michaelbrown',
        email: 'michaelbrown@example.com',
        password: 'Brownie!',
        createdAt: '2024-06-28T08:30:15Z',
        updatedAt: '2024-06-29T13:10:40Z',
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
    return queryInterface.bulkDelete('users', null, {});
  },
};
