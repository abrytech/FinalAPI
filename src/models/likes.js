'use strict'
module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define('Likes', {
    userId: DataTypes.UUID,
    reviewId: DataTypes.UUID
  }, {})
  Likes.associate = function (models) {
    // associations can be defined here
    Likes.belongsTo(models.Users)
    Likes.belongsTo(models.Reviews)
  }
  return Likes
}
