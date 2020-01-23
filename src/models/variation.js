import uuid from 'uuid/v4'
export default (sequelize, DataTypes) => {
  const Variation = sequelize.define(
    'Variations',
    {
      productId: DataTypes.UUID,
      price: DataTypes.DOUBLE,
      image: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      inventoryId: DataTypes.INTEGER
    },
    {
      hooks: {
        beforeCreate: (data, option) => {
          data.id = uuid()
        }
      }
    }
  )
  Variation.associate = function (models) {
    // associations can be defined here
    Variation.hasOne(models.ImageFile)
    Variation.belongsTo(models.Products, { foreignKey: 'productId' })
    Variation.belongsToMany(models.AttributeValues, { through: 'VariationAttributeValues' })
  }
  return Variation
}
