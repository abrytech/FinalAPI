'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Variations', {
      id: {
        // allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      productId: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      salePrice: {
        type: Sequelize.DOUBLE
      },
      OutStock: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
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
    return queryInterface.dropTable('Variations')
  }
}
