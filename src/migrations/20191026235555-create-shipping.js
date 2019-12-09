'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shippings', {
      id: {
        // allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      weight: {
        type: Sequelize.DOUBLE
      },
      length: {
        type: Sequelize.DOUBLE
      },
      width: {
        type: Sequelize.DOUBLE
      },
      height: {
        type: Sequelize.DOUBLE
      },
      className: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Shippings')
  }
}
