import uuid from 'uuid/v4'
export default (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    code: DataTypes.STRING,
    newProduct: DataTypes.BOOLEAN,
    productStatus: DataTypes.STRING,
    futuredProduct: DataTypes.BOOLEAN,
    description: DataTypes.STRING(500),
    shortDescription: DataTypes.STRING,
    discountId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    modelId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    // gallery: DataTypes.STRING(500),
    enableShare: DataTypes.BOOLEAN,
    isVariable: DataTypes.BOOLEAN,
    warranty: DataTypes.INTEGER,
    categoryId: DataTypes.UUID,
    vendorId: DataTypes.UUID
  }, {
    hooks: {
      beforeCreate: (data, option) => {
        data.id = uuid()
      }
    }
  })
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
