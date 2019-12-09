export default (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(500)
  }, {})
  Categories.associate = function (models) {
    // associations can be defined here
    Categories.hasMany(models.Products)
  }
  return Categories
}
