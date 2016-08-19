'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn('Tasks', 'status_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
          model: 'Tasks',
          key: 'id'
        }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface
      .removeColumn('Tasks', 'status_id');
  }
};
