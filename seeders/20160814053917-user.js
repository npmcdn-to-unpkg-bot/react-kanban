'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
    {
      "username" : "blank_something",
      createdAt: new Date(),
      updatedAt: new Date()
    }],{
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users');
  }
};
