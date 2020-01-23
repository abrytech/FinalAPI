export default (sequelize, DataTypes) => {
  const Address = sequelize.define('Addresses', {
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    stateCounty: DataTypes.STRING,
    map: DataTypes.STRING,
    userId: DataTypes.UUID,
    vendorId: DataTypes.UUID
  }, {})
  Address.associate = function (models) {
    // associations can be defined here
    Address.belongsTo(models.Vendors, { foreignKey: 'vendorId' })
    Address.belongsTo(models.Users, { foreignKey: 'vendorId' })
  }
  return Address
}
