'use strict'
module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define('Sizes', {
    value: DataTypes.STRING,
    name: DataTypes.STRING
  }, {})
  Size.associate = function (models) {
    // associations can be defined here
    Size.belongsTo(models.Variations)
  }
  return Size
}
