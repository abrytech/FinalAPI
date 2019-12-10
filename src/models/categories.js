export default (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
    parentId: DataTypes.UUID,
    image: DataTypes.STRING
  }, {})
  Categories.associate = function (models) {
    // associations can be defined here
    Categories.hasMany(models.Products)
  }
  return Categories
}
