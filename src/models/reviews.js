export default (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    productId: DataTypes.UUID,
    userId: DataTypes.UUID,
    rating: DataTypes.DOUBLE,
    review: DataTypes.STRING(500)
  }, {})
  Reviews.associate = function (models) {
    // associations can be defined here
    Reviews.belongsTo(models.Products)
    Reviews.belongsTo(models.Users)
  }
  return Reviews
}
