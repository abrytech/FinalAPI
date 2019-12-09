'use strict'
module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Colors', {
    value: DataTypes.STRING,
    name: DataTypes.STRING
  }, {})
  Color.associate = function (models) {
    // associations can be defined here
    Color.belongsTo(models.Variations)
  }
  return Color
}
