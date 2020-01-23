export default (sequelize, DataTypes) => {
  const Discounts = sequelize.define('Discounts', {
    salePrice: DataTypes.DOUBLE,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    saleQuantity: DataTypes.INTEGER,
    soldQuantity: DataTypes.INTEGER
  }, {})
  Discounts.associate = function (models) {
    // associations can be defined here
  }
  return Discounts
}
