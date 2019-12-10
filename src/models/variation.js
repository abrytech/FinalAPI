export default (sequelize, DataTypes) => {
  const Variation = sequelize.define('Variations', {
    productId: DataTypes.UUID,
    price: DataTypes.DOUBLE,
    salePrice: DataTypes.DOUBLE,
    image: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    inventoryId: DataTypes.UUID,
    attributeId: DataTypes.UUID,
    attributeValueId: DataTypes.UUID
  }, {})
  Variation.associate = function (models) {
    // associations can be defined here
    Variation.belongsTo(models.Products, { foreignKey: 'productId' })
  }

  return Variation
}
