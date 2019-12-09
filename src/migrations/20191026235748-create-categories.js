'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
      id: {
        // allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(500)
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
    return queryInterface.dropTable('Categories')
  }
}
