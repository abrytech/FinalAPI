export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      newProduct: {
        type: Sequelize.BOOLEAN
      },
      productStatus: {
        type: Sequelize.STRING
      },
      futuredProduct: {
        type: Sequelize.BOOLEAN
      },
      review: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(500)
      },
      shortDescription: {
        type: Sequelize.STRING
      },
      brandId: {
        type: Sequelize.STRING
      },
      modelId: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      gallery: {
        type: Sequelize.STRING(500)
      },
      enableShare: {
        type: Sequelize.BOOLEAN
      },
      isVariable: {
        type: Sequelize.BOOLEAN
      },
      warranty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
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
    return queryInterface.dropTable('products')
  }
}
