'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      tag: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(500)
      },
      shortDescription: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      gallery: {
        type: Sequelize.STRING(500)
      },
      enableShare: {
        type: Sequelize.BOOLEAN
      },
      isVariable: {
        type: Sequelize.BOOLEAN
      },
      warranty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
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
    return queryInterface.dropTable('products')
  }
}
