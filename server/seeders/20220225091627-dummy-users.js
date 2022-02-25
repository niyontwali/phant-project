'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
  // Add seed commands here.
    await queryInterface.bulkInsert('user', [{
      full_name: 'John Niyontwali',
      email: 'nijohn0006@gmail.com',
      phone_number: 781161254,
      password: 'driver',
      updated_at: '2022-02-24T17:33:46.115Z',
      created_at: '2022-02-24T17:33:46.115Z'
    }, {
      full_name: 'Diane Mugabo',
      email: 'diane@gmail.com',
      phone_number: 781161254,
      password: 'operator',
      updated_at: '2022-02-24T17:33:46.115Z',
      created_at: '2022-02-24T17:33:46.115Z'
    }, {
      full_name: 'Christine Mutoni',
      email: 'nijohn0006@gmail.com',
      phone_number: 781161254,
      password: 'admin',
      updated_at: '2022-02-24T17:33:46.115Z',
      created_at: '2022-02-24T17:33:46.115Z'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {})
  }
}
