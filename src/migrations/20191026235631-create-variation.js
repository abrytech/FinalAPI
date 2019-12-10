export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Variations', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      productId: {
        type: Sequelize.UUID
      },
      price: {
        type: Sequelize.DOUBLE
      },
      salePrice: {
        type: Sequelize.DOUBLE
      },
      image: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      inventoryId: {
        type: Sequelize.UUID
      },
      attributeId: {
        type: Sequelize.UUID
      },
      attributeValueId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Variations')
  }
}
