export default (sequelize, DataTypes) => {
  const Models = sequelize.define('Models', {
    name: DataTypes.STRING,
    brandId: DataTypes.UUID
  }, {})
  Models.associate = function (models) {
    // associations can be defined here
    Models.belongsTo(models.Brands)
  }
  return Models
}
