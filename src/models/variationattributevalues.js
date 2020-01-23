export default (sequelize, DataTypes) => {
  const VariationAttributeValues = sequelize.define('VariationAttributeValues', {
    variationId: DataTypes.UUID,
    attributeValueId: DataTypes.INTEGER
  }, {})
  VariationAttributeValues.associate = function (models) {
    // associations can be defined here
    VariationAttributeValues.hasOne(models.Variations)
    VariationAttributeValues.hasOne(models.AttributeValues)
  }
  return VariationAttributeValues
}
