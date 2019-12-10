export default (sequelize, DataTypes) => {
  const Brands = sequelize.define('Brands', {
    name: DataTypes.STRING,
    categoryId: DataTypes.UUID
  }, {})
  Brands.associate = function (models) {
    // associations can be defined here
    Brands.belongsTo(models.Categories)
  }
  return Brands
}
