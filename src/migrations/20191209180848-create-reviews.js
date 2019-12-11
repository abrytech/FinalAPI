'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      productId: {
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.UUID
      },
      rating: {
        type: Sequelize.DOUBLE
      },
      review: {
        type: Sequelize.STRING(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews')
  }
}
