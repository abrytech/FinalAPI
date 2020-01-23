import uuid from 'uuid/v4'
export default (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
    parentId: DataTypes.UUID,
    imageId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (data, option) => {
        data.id = uuid()
      }
    }
  })
  Categories.associate = function (models) {
    // associations can be defined here
    Categories.hasMany(models.Products)
  }
  return Categories
}
