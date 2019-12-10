export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shippings', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
      productId: {
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
    return queryInterface.dropTable('Shippings')
  }
}
