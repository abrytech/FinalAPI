'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      productId: {
        defaultValue: false,
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inventories')
  }
}
