export default (sequelize, DataTypes) => {
  const ProductTags = sequelize.define('ProductTags', {
    productId: DataTypes.UUID,
    tagId: DataTypes.INTEGER
  }, {})
  ProductTags.associate = function (models) {
    // associations can be defined here
    ProductTags.hasOne(models.Products)
    ProductTags.hasOne(models.Tags)
  }
  return ProductTags
}
