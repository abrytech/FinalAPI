import uuid from 'uuid/v4'
export default (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    productId: DataTypes.UUID,
    userId: DataTypes.UUID,
    parentId: DataTypes.UUID,
    rating: DataTypes.DOUBLE,
    review: DataTypes.STRING(500)
  }, {
    hooks: {
      beforeCreate: (data, option) => {
        data.id = uuid()
      }
    }
  })
  Reviews.associate = function (models) {
    // associations can be defined here
    Reviews.belongsTo(models.Products)
    Reviews.belongsTo(models.Users)
  }
  return Reviews
}
