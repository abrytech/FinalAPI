'use strict'
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    tag: DataTypes.STRING,
    review: DataTypes.STRING,
    description: DataTypes.STRING(400),
    shortDescription: DataTypes.STRING(150),
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    image: DataTypes.STRING,
    gallery: DataTypes.STRING(500),
    enableShare: DataTypes.BOOLEAN,
    isVariable: DataTypes.BOOLEAN,
    warranty: DataTypes.INTEGER
    // categoryId: DataTypes.UUID,
    // vendorId: DataTypes.UUID,
    // inventoryId: DataTypes.UUID,
    // shippingId: DataTypes.UUID,
    // variationId: DataTypes.UUID,
  }, {})
  Products.associate = function (models) {
    // associations can be defined here
    Products.hasMany(models.Variations, {
      foreignKey: 'variationId',
      sourceKey: 'id'
    })
    Products.hasOne(models.Shippings, {
      foreignKey: 'shippingId',
      sourceKey: 'id'
    })
    Products.hasOne(models.Inventories, {
      foreignKey: 'inventoryId',
      sourceKey: 'id'
    })
    Products.belongsTo(models.Vendors, {
      foreignKey: 'vendorId',
      targetKey: 'id'
    })
    // Products.belongsTo(models.Categories, {
    //   foreignKey: 'categoryId',
    //   targetKey: 'id'
    // });
  }
  return Products
}
