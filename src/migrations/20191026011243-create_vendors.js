'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendors', {
      id: {
        // allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      nikName: {
        type: Sequelize.STRING
      },
      phoneNo: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      biographicalInfo: {
        type: Sequelize.STRING
      },
      vendorImage: {
        type: Sequelize.STRING
      },
      banner: {
        type: Sequelize.STRING
      },
      storeName: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      storeUrl: {
        unique: true,
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
    return queryInterface.dropTable('Vendors')
  }
}
