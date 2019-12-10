export default (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    name: DataTypes.STRING
  }, {})
  Tags.associate = function (models) {
    // associations can be defined here
    Tags.belongsToMany(models.Products, { through: 'ProductTags' })
  }
  return Tags
}
