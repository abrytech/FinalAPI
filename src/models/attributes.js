export default (sequelize, DataTypes) => {
  const Attributes = sequelize.define('Attributes', {
    name: DataTypes.STRING
  }, {})
  Attributes.associate = function (models) {
    // associations can be defined here
  }
  return Attributes
}
