export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductTags', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      productId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      tagId: {
        allowNull: false,
        type: Sequelize.UUID
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
    return queryInterface.dropTable('ProductTags')
  }
}
