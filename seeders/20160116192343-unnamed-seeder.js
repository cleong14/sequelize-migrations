'use strict';

var faker = require('faker');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        bio: faker.lorem.words(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
