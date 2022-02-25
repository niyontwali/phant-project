'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
  // Add seed commands here.
    await queryInterface.bulkInsert('users', [{
      name: 'John Niyontwali',
      email: 'nijohn0006@gmail.com',
      role: 'driver',
      updatedAt: '2022-02-24T17:33:46.115Z',
      createdAt: '2022-02-24T17:33:46.115Z'
    }, {
      name: 'Diane Mugabo',
      email: 'diane@gmail.com',
      role: 'operator',
      updatedAt: '2022-02-24T17:33:46.115Z',
      createdAt: '2022-02-24T17:33:46.115Z'
    }, {
      name: 'Christine Mutoni',
      email: 'nijohn0006@gmail.com',
      role: 'admin',
      updatedAt: '2022-02-24T17:33:46.115Z',
      createdAt: '2022-02-24T17:33:46.115Z'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
