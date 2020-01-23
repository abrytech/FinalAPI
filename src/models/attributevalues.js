export default (sequelize, DataTypes) => {
  const AttributeValues = sequelize.define('AttributeValues', {
    attributeId: DataTypes.INTEGER,
    value: DataTypes.STRING
  }, {})
  AttributeValues.associate = function (models) {
    // associations can be defined here
    AttributeValues.belongsTo(models.Attributes)
    AttributeValues.belongsToMany(models.Variations, { through: 'VariationAttributeValues' })
  }
  return AttributeValues
}
