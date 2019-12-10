export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sizes', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      value: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      }
      // createdBy: {
      //   type: Sequelize.STRING(36)
      // },
      // updatedBy: {
      //   type: Sequelize.STRING(36)
      // }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sizes')
  }
}
