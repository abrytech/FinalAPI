export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      address_line_1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address_line_2: {
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stateCounty: {
        allowNull: false,
        type: Sequelize.STRING
      },
      map: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      vendorId: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Address')
  }
}
