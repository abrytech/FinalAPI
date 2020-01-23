'use strict'
module.exports = {
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
        type: Sequelize.INTEGER
      },
      discountId: {
        type: Sequelize.INTEGER
      },
      modelId: {
        type: Sequelize.INTEGER
      },
      imageId: {
        type: Sequelize.INTEGER
      },
      // gallery: {
      //   type: Sequelize.STRING(500)
      // },
      enableShare: {
        type: Sequelize.BOOLEAN
      },
      isVariable: {
        type: Sequelize.BOOLEAN
      },
      warranty: {
        type: Sequelize.INTEGER
      },
      vendorId: {
        type: Sequelize.UUID
      },
      categoryId: {
        type: Sequelize.UUID
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
        type: Sequelize.UUID
      },
      updatedBy: {
        type: Sequelize.UUID
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
}
