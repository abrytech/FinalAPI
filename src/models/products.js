export default (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    code: DataTypes.STRING,
    newProduct: DataTypes.BOOLEAN,
    productStatus: DataTypes.STRING,
    futuredProduct: DataTypes.BOOLEAN,
    description: DataTypes.STRING(400),
    shortDescription: DataTypes.STRING(150),
    brandId: DataTypes.UUID,
    modelId: DataTypes.UUID,
    image: DataTypes.STRING,
    gallery: DataTypes.STRING(500),
    enableShare: DataTypes.BOOLEAN,
    isVariable: DataTypes.BOOLEAN,
    warranty: DataTypes.INTEGER,
    categoryId: DataTypes.UUID,
    vendorId: DataTypes.UUID
    // inventoryId: DataTypes.UUID,
    // shippingId: DataTypes.UUID,
    // variationId: DataTypes.UUID,
  }, { })
  Products.associate = function (models) {
    // associations can be defined here
    Products.hasMany(models.Variations)
    Products.belongsToMany(models.Tags, { through: 'ProductTags' })
    Products.hasMany(models.Reviews)
    Products.hasOne(models.Shippings)
    Products.hasOne(models.Inventories)
    Products.belongsTo(models.Brands)
    Products.belongsTo(models.Models)
    Products.belongsTo(models.Vendors)
    Products.belongsTo(models.Categories)
  }
  return Products
}
