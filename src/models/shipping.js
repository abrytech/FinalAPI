'use strict'
module.exports = (sequelize, DataTypes) => {
  const Shipping = sequelize.define('Shippings', {
    weight: DataTypes.DOUBLE,
    length: DataTypes.DOUBLE,
    width: DataTypes.DOUBLE,
    height: DataTypes.DOUBLE,
    class: DataTypes.STRING
  }, {})
  Shipping.associate = function (models) {
    // associations can be defined here
    Shipping.belongsTo(models.Products)
  }
  return Shipping
}
