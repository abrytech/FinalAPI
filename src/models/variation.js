'use strict'
module.exports = (sequelize, DataTypes) => {
  const Variation = sequelize.define('Variations', {
    productId: DataTypes.UUID,
    color: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    salePrice: DataTypes.DOUBLE,
    OutStock: DataTypes.BOOLEAN
  }, {})
  Variation.associate = function (models) {
    // associations can be defined here
    Variation.belongsTo(models.Products, { foreignKey: 'productId' })
  }

  return Variation
}
