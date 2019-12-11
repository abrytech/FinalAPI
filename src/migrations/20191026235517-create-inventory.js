'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inventories', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      stockStatus: {
        type: Sequelize.STRING
      },
      outOfStock: {
        defaultValue: true,
        type: Sequelize.B23OOLEAN
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
