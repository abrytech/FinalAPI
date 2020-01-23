'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ImageFiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fileName: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      filePath: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fileExtension: Sequelize.STRING,
      description: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.Now
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ImageFiles')
  }
}
