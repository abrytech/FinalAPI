'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendors', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
      activationKey: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      spam: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      createdBy: {
        type: Sequelize.UUID
      },
      updatedBy: {
        type: Sequelize.UUID
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Vendors')
  }
}
