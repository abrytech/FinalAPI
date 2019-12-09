'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inventories', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      stockStatus: {
        type: Sequelize.STRING
      },
      outOfStock: {
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      soldIndividually: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.STRING(36)
      },
      updatedBy: {
        type: Sequelize.STRING(36)
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inventories')
  }
}
