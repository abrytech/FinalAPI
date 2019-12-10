export default (sequelize, DataTypes) => {
  const AttributeValues = sequelize.define('AttributeValues', {
    attributeId: DataTypes.UUID,
    value: DataTypes.STRING
  }, {})
  AttributeValues.associate = function (models) {
    // associations can be defined here
  }
  return AttributeValues
}
